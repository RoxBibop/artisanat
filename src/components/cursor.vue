<template>
  <div class="cursor" ref="cursor"></div>
</template>

<style lang="scss">
@import '@/assets/scss/global.scss';
.cursor 
{
  z-index: 99999999999999999999;
  position: absolute;
  background: transparent;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid rgb(46, 46, 46);
  transition: height .2s, width .2s;  
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.active
{
  width: 30px;
  height: 30px;
}

.cursor:before
{
  content: '';
  position: absolute;
  width: 120%;
  height: 120%;
  background: transparent;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid rgb(46, 46, 46, .2);
}

</style>

<script>
export default {
  name: 'Curseur',
  methods: {
    handleCursor: function(e){
      const cursor = this.$refs.cursor;
      
      document.addEventListener("mousemove",(e)=>{
        cursor.style.top = `${e.y}px`;
        cursor.style.left = `${e.x}px`;
      })
    }
  },
  mounted(){
    this.handleCursor();
  }
}
</script>