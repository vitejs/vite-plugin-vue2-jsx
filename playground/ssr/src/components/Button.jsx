import { defineComponent } from 'vue'
import '../assets/button.css'

export default defineComponent({
  setup() {
    return () => {
      return <div class="btn">dynamicBtn</div>
    }
  }
})
