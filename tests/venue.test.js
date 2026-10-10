const assert = require('node:assert/strict');
const {floors,guests,canStand} = require('../miniprogram/data/venue');
assert.equal(new Set(floors.map(f=>f.id)).size,floors.length);
for (const floor of floors) {
 assert(canStand(floor,53,60),'Spawn must be walkable');
 assert(!canStand(floor,-1,50));
 assert(!canStand(floor,50,101));
 assert.equal(new Set(floor.objects.map(o=>o.id)).size,floor.objects.length);
 for (const o of floor.objects) {
  assert(o.x>=0 && o.y>=0 && o.x+o.w<=100 && o.y+o.h<=100);
  assert(!canStand(floor,o.x+o.w/2,o.y+o.h/2),'Furniture must block standing');
 }
}
for (const guest of guests) assert(floors.some(f=>f.id===guest.floor));
console.log('Venue checks passed');
