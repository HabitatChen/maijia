import Vue from 'vue'
import Foot from 'components/Foot.vue'
import axios from 'axios'
import url from 'js/api.js'
import 'css/common.css'
import './category.css'

new Vue({
  el: '#app',
  data: {
    navList: null,
    topIndex: 0,
    subList: null,
    rank: null
  },
  components: {
    Foot
  },
  created() {
    this.getNavList()
    this.getSubList(0 ,0 )
  },
  methods: {
    getNavList() {
      axios.post(url.navList).then(res => {
        this.navList = res.data.list
      })
    },
    getSubList(id, index) {
      this.topIndex = index
      if (index === 0) {
        this.getRank()
      } else {
        axios.post(url.subList, {id}).then(res => {
          this.subList = res.data.data
        })
      }
    },
    getRank() {
      axios.post(url.rank).then(res => {
        this.rank = res.data.data
      })
    }
  },
  filters: {
    number(price) {
      return price + '.00'
    }
  }

})
