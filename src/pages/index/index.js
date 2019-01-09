import 'css/common.css'
import './index.css'
import Foot from 'components/Foot.vue'
import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);


new Vue({
  el: '#app',
  data: {
    hotList: null,
    pageNum: 1,
    pageSize: 6,
    loading: false,
    allLoaded: false
  },
  created() {
    this.getHotList()
  },
  components: {
    Foot
  },
  methods: {
    getHotList() {
      if (!this.allLoaded) {
        this.loading = true
        axios.post(url.hotLists, {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }).then(res => {
          let curList = JSON.parse(res.data).list
          if (this.hotList) {
            this.hotList = this.hotList.concat(curList)
          } else {
            this.hotList = curList
          }
          this.pageNum++
          this.loading = false
        })
      }
    }
  }
})
