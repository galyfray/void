const galyLib = this.global.galyLib;
const mur = galyLib.extendErraticMendingWall("void-wall",[{}]);

mur.cooldown = 20;
mur.maxHeatPerHitPercent = 0.5;
mur.minHeatPerHitPercent = 0.0;
mur.healChance = 25;
mur.maxHeat = 120;
mur.heatDissipation = 400;
mur.maxHealPercent = 0.05;
mur.minHealPercent = 0;
