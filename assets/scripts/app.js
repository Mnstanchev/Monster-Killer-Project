const ATTACK_VALUE = 10; // Global value
const MONSTER_ATTACK_VALUE = 14; // Global value
const STRONG_ATTACK_VALUE = 17; // Global value
let choosenMaxLife = 100;

let currentMontsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;

adjustHealthBars(choosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
  currentMontsterHealth -= damage;
  const playerDemage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDemage;
  if (currentMontsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('Hurray! You`ve won!');
  } else if (currentPlayerHealth <= 0 && currentMontsterHealth > 0) {
    alert('Boomer! You lost!');
  } else if (currentPlayerHealth <= 0 && currentMontsterHealth <= 0) {
    alert('It`s a draw! Re-play again!');
  }
}

function strongAttackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMontsterHealth -= damage;
  const playerDemage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDemage;
  if (currentMontsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('Hurray! You`ve won!');
  } else if (currentPlayerHealth <= 0 && currentMontsterHealth > 0) {
    alert('Boomer! You lost!');
  } else if (currentPlayerHealth <= 0 && currentMontsterHealth <= 0) {
    alert('It`s a draw! Re-play again!');
  }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
