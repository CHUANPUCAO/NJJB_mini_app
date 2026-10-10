const venue = require('../../data/venue');
Page({
 data: { floors: venue.floors, floorIndex: 0, floor: venue.floors[0], guests: [], me: {x:53,y:60}, selected: null, liked: {}, draft: '', messages: [] },
 onLoad() { this.refreshGuests(); },
 refreshGuests() { this.setData({ guests: venue.guests.filter(g => g.floor === this.data.floor.id) }); },
 switchFloor(e) {
  const index = Number(e.currentTarget.dataset.index);
  if (!venue.floors[index]) return;
  this.setData({floorIndex:index,floor:venue.floors[index],me:{x:53,y:60},selected:null,messages:[]});
  this.refreshGuests();
 },
 move(e) {
  const touch = e.touches[0] || e.changedTouches[0];
  if (!touch) return;
  this.createSelectorQuery().select('#room').boundingClientRect(rect => {
   if (!rect) return;
   const x = (touch.clientX-rect.left)/rect.width*100;
   const y = (touch.clientY-rect.top)/rect.height*100;
   if (venue.canStand(this.data.floor,x,y)) this.setData({me:{x,y}});
  }).exec();
 },
 inspect(e) {
  const object = this.data.floor.objects.find(o=>o.id===e.currentTarget.dataset.id);
  if (object.type==='stairs') return this.switchFloor({currentTarget:{dataset:{index:1-this.data.floorIndex}}});
  wx.showToast({title:object.label+' · preview only',icon:'none'});
 },
 selectGuest(e) {
  const guest = this.data.guests.find(g=>g.id===e.currentTarget.dataset.id);
  this.setData({selected:guest,draft:'',messages:[]});
 },
 like() {
  const id=this.data.selected.id;
  this.setData({['liked.'+id]:!this.data.liked[id]});
 },
 input(e) { this.setData({draft:e.detail.value}); },
 send() {
  const text=this.data.draft.trim().slice(0,200);
  if (!text) return;
  this.setData({messages:this.data.messages.concat([{id:Date.now(),text}]),draft:''});
 },
 gift() { wx.showModal({title:'Drink gift preview',content:'This is a demo. No drink is ordered and no payment is taken.',showCancel:false}); }
});
