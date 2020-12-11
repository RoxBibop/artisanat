<template>
  <div class="main">
    <p class="police results m0">Resultats</p>
    <div class="loading txt" v-if="loading">
      <p>Nous sommes en train de traiter vos réponses, merci de patienter...</p>
      <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
      </svg>
    </div>
    <p class="m0 txt" v-if="!loading">Grâce à vos choix lors du jeu, nous avons trouvés {{ rl }} métiers de l'artisanat qui peuvent vous correspondre</p>
    <div class="ctn">
      <div class="flex">
        <div class="loop" v-for="job in responseData" :key="job.name"> 
          <div class="card">
            <div class="circle">
              <h2>{{ job.name }}</h2>
            </div>
            <div class="content">
              <p class="cardcontent">{{ job.smallDescription }}</p>
            </div>
          </div>

        </div>
      </div>
    </div>


    
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
          profile_3 : null        
        },
        loading : true,
        responseData : [
         
        ],
        rl : "",
        items : [
          { message: 'Foo' },
          { message: 'Bar' }
        ]
      }
    },


    methods: {
      test: function() {
        console.log("bonjour");
        console.log(this.responseData);
      }
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

      // REQUETE
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = 'https://simplonforcma.herokuapp.com/result/'

      const options = {
          method: 'POST',
          body : JSON.stringify(finalObject),
          headers: {
              'Content-Type': 'application/json'
          }
      }
      
      fetch(proxyurl + url, options)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.responseData = res;
          this.rl = res.length;
          this.loading = false;
          console.log(this.responseData)
        });

    },

    beforeCreate(){
      if(this.$store.state.R + this.$store.state.I + this.$store.state.A + this.$store.state.S + this.$store.state.E + this.$store.state.C == 0){
        this.$router.push('play');
      } 
    },
  }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(126, 126, 126); 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #535353; 
}
  .main {
    font-family: 'play';
    font-size: 18px;
    height: 100vh;
    width: 100vw;
    margin : 0;
    background-color: rgb(56, 56, 56);
    display: block;
    color : rgb(39, 38, 38);
  }
  .police {
    font-family: 'play';
  }
  .results {
    color: white;
    margin: 0;
    padding-top: 10px;
    font-size: 60px;
  }
  .txt {
    color : white;
    font-size: 20px;
    font-weight: lighter;
  }
  .flex {
    margin : 20px;
    position: relative;
    flex-wrap : wrap;
    padding: 20px;
  }
  .ctn {
    position: relative;
    width: 100%;
  }
  .card {
    overflow: hidden;
    margin : 40px;
    position: relative;
    width : 300px;
    height: 420px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 15px 25px rgba(0,0,0, 0.2);
    transition: .3s;

    .circle {
      position: relative;
      width: 100%;
      height: 100%;
      background-color: black;
      clip-path: circle(180px at center -60px);

      h2 {
        margin : 0;
        padding-top: 20px;
        color : white;
        font-weight: lighter;
      }
    }

    .content {
      position: absolute;
      bottom : 90px;
      page-break-after: 20px;

      .cardcontent {
        height: 150px;
        overflow: auto;
        margin : 10px;
        padding : 8px;
        text-align: left;
      }
    }
  }
  .ctn .flex .card:nth-child(1) .circle,
  .ctn .flex .card:nth-child(1) .content a{
    background-color: rgb(233, 142, 5);
  }

  .ctn .flex .loop:nth-child(2) .circle,
  .ctn .flex .loop:nth-child(2) .content a{
    background-color: rgb(192, 12, 153);
  }

  .ctn .flex .loop:nth-child(3) .circle,
  .ctn .flex .loop:nth-child(3) .content a{
    background-color: rgb(81, 12, 192);
  }

  $offset: 187;
  $duration: 1.4s;

  .spinner {
    animation: rotator $duration linear infinite;
  }

  @keyframes rotator {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(270deg); }
  }

  .path {
    stroke-dasharray: $offset;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation:
      dash $duration ease-in-out infinite, 
      colors ($duration*4) ease-in-out infinite;
  }

  @keyframes colors {
    0% { stroke: #4285F4; }
    25% { stroke: #DE3E35; }
    50% { stroke: #F7C223; }
    75% { stroke: #1B9A59; }
    100% { stroke: #4285F4; }
  }

  @keyframes dash {
    0% { stroke-dashoffset: $offset; }
    50% {
      stroke-dashoffset: $offset/4;
      transform:rotate(135deg);
    }
    100% {
      stroke-dashoffset: $offset;
      transform:rotate(450deg);
    }
  }

  </style>