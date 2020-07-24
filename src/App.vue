<template>
  <div id="app">
    <router-view/>
    <div class="cursor"></div>
  </div>
</template>



<style lang="scss">
@import '@/assets/scss/global.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  // font-family: 'sketch';
}

</style>

<script>
export default {
  methods: {
    cursor: function(){
      const cursor = document.querySelector(".cursor");
      
      document.addEventListener("mousemove",(e)=>{   
        let x = e.x,
            y = e.y;
        cursor.style.top = `${y}px`;
        cursor.style.left = `${x}px`;
      })

      document.addEventListener("click", ()=>{
        
      })

      // const links = document.querySelectorAll(".link");

      // console.log(links);
      // links.forEach(link => {
      //   link.addEventListener("mouseenter", (e)=>{
      //     cursor.classList.add("active");
      //     // console.log(link);
      //   })
      //   link.addEventListener("mouseout", (e)=>{
      //     cursor.classList.remove("active");
      //   })
      // });
    }
  },
  mounted(){
    // this.cursor();
  }
}
</script>