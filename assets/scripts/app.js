const ATTACK_VALUE = 10; // Global value
let choosenMaxLife = 100;

let currentMontsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;

adjustHealthBars(choosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMontsterHealth -= damage;
}

attackBtn.addEventListener('click', attackHandler);
