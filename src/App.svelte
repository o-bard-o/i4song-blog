<script lang="ts">
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import '@adorable.css'
</script>

<main>
  <div class="vbox pack gap(20) text-center p(50)">
    <div class="hbox font(100/-/-15%) AppleSD opacity(0.7) hover:scale(1.05) hover:opacity(1) transition(.4s) pointer group">
      <span class="group-hover:rotate(-10deg) group-active:rotate(10deg) transition(.4s)">ฅ</span>
      <span>^•ﻌ•^</span>
      <span class="group-hover:rotate(10deg) group-active:rotate(-10deg) transition(.4s)">ฅ <span class="font(30) c(#ccc) group-hover:c(#fb3958) vertical-top transition(.4s)">♥</span></span>
    </div>
  
    <div>
      <h1 class="font(30) 200 c(#666)">AdorableCSS</h1>
      <p>✨ Rapid on-demand atomic css framework</p>
    </div>
  </div>
</main>
