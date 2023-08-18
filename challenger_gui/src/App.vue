<template>
  <div>
<NavBar/>
  <router-view/>
  <Footer/>
</div>
</template>
<script>
import NavBar from'@/components/NavBar.vue'
import Footer from '@/components/FooterComp.vue'
export default {
  components:{
    NavBar,
    Footer
  }
}
</script>