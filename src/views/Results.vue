<template>
  <div class="bite">
      A: <span>{{this.$store.state.A}}</span><br>
      C: <span>{{this.$store.state.C}}</span><br>
      E: <span>{{this.$store.state.E}}</span><br>
      I: <span>{{this.$store.state.I}}</span><br>
      R: <span>{{this.$store.state.R}}</span><br>
      S: <span>{{this.$store.state.S}}</span><br>
  </div>
</template>

<script>
  export default {
    name: 'Results',
    data() {
      return {
        objectDatas : {
          profile_1 : null,
          profile_2 : null,
          profile_3 : null        }
      }
    },
    methods: {
      
    },
    mounted: function() {

      let obj = {...this.$store.state},
          i = 0;
          
      console.log(obj);

      const getMax = obj => {
        return Object.keys(obj).filter(x => {
          return obj[x] == Math.max.apply(null, Object.values(obj));
        });
      };

      let arr = getMax(obj);

      arr.forEach(e => {
        this.objectDatas[`profile_${i+1}`] = e;
        i++
      });

      let finalObject = {...this.objectDatas};

      console.log(finalObject);
    },

    beforeCreate(){
      if(this.$store.state.R + this.$store.state.I + this.$store.state.A + this.$store.state.S + this.$store.state.E + this.$store.state.C == 0){
        this.$router.push('play');
      } 
    }
  }
</script>

<style lang="scss" scoped>
.bite{
  color: blue;
  span{
    color: red;
    font-weight: bold;
  }
}
</style>