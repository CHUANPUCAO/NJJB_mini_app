// Positions are percentages. Illustrative only: replace after the venue survey.
const floors = [
 { id: 'ground', name: 'First floor', objects: [
  {id:'bar',label:'BAR',type:'bar',x:8,y:9,w:52,h:13},
  {id:'tv',label:'TV',type:'fixture',x:76,y:6,w:17,h:7},
  {id:'t1',label:'TABLE 01',type:'table',x:12,y:38,w:24,h:13},
  {id:'t2',label:'TABLE 02',type:'table',x:63,y:38,w:24,h:13},
  {id:'pool',label:'POOL',type:'pool',x:12,y:69,w:36,h:16},
  {id:'stairs',label:'UPSTAIRS ↗',type:'stairs',x:65,y:77,w:28,h:12}
 ]},
 { id: 'upstairs', name: 'Upstairs', objects: [
  {id:'dj',label:'DJ BOOTH',type:'bar',x:20,y:9,w:60,h:14},
  {id:'t3',label:'TABLE 03',type:'table',x:12,y:40,w:25,h:14},
  {id:'t4',label:'TABLE 04',type:'table',x:64,y:40,w:25,h:14},
  {id:'board',label:'BLACKBOARD',type:'fixture',x:8,y:75,w:36,h:10},
  {id:'stairs',label:'DOWNSTAIRS ↘',type:'stairs',x:62,y:77,w:31,h:12}
 ]}
];
const guests = [
 {id:'demo-lin',name:'Lin',initial:'L',floor:'ground',x:43,y:41},
 {id:'demo-kai',name:'Kai',initial:'K',floor:'ground',x:78,y:60},
 {id:'demo-mia',name:'Mia',initial:'M',floor:'upstairs',x:45,y:45}
];
function canStand(floor,x,y) {
 return x>=4 && x<=96 && y>=4 && y<=96 && !floor.objects.some(o => x>=o.x-3 && x<=o.x+o.w+3 && y>=o.y-3 && y<=o.y+o.h+3);
}
module.exports = { floors, guests, canStand };
