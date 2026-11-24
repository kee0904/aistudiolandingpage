import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculatePricingSummary,
  checkGuaranteeEligibility,
  getAdaptedFormat,
  validateApplicationForm,
} from './acceleratorLogic';

test('calculatePricingSummary returns accurate totals and savings for both plans', () => {
  const oneTime = calculatePricingSummary('one-time');
  assert.equal(oneTime.totalUsd, 5999);
  assert.equal(oneTime.savingsUsd, 601);
  assert.equal(oneTime.headlinePrice, 'US$5,999');

  const installment = calculatePricingSummary('payment-plan');
  assert.equal(installment.totalUsd, 6600);
  assert.equal(installment.savingsUsd, 0);
  assert.equal(installment.headlinePrice, 'US$1,650 × 4');
});

test('getAdaptedFormat generates distinct niche-specific hooks and rotates angles cleanly', () => {
  const coachMyth0 = getAdaptedFormat('coaches', 'myth-buster', 0);
  const coachMyth1 = getAdaptedFormat('coaches', 'myth-buster', 1);
  const businessNumbers = getAdaptedFormat('business', 'numbers-breakdown', 0);

  assert.equal(coachMyth0.nicheLabel, 'Coaches & Consultants');
  assert.notEqual(coachMyth0.hookLine, coachMyth1.hookLine);
  assert.match(coachMyth0.aiPromptTemplate, /Coaches & Consultants/);
  assert.equal(coachMyth0.aiPromptTemplate.includes('""'), false);
  assert.match(businessNumbers.expectedViewsBand, /views/);
});

test('checkGuaranteeEligibility enforces >=1 weekly call and >=1 weekly video', () => {
  const pass = checkGuaranteeEligibility(1, 1);
  assert.equal(pass.eligible, true);
  assert.equal(pass.callsMet, true);
  assert.equal(pass.videosMet, true);

  const failCalls = checkGuaranteeEligibility(0, 2);
  assert.equal(failCalls.eligible, false);
  assert.equal(failCalls.callsMet, false);

  const failVideos = checkGuaranteeEligibility(1, 0);
  assert.equal(failVideos.eligible, false);
  assert.equal(failVideos.videosMet, false);
});

test('validateApplicationForm rejects invalid inputs and accepts complete applications', () => {
  const invalid = validateApplicationForm({
    fullName: 'A',
    email: 'invalid-email',
    socialHandle: '',
    niche: 'creators',
    planId: 'one-time',
    agreedToWeeklyCadence: false,
  });

  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.socialHandle);
  assert.ok(invalid.errors.agreedToWeeklyCadence);

  const valid = validateApplicationForm({
    fullName: 'Maya Lin',
    email: 'maya@framecraft.co',
    socialHandle: '@mayalin.studio',
    niche: 'creators',
    planId: 'payment-plan',
    agreedToWeeklyCadence: true,
  });

  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});
