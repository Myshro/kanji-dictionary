<template>
  <header class="m-0 font-all flex justify-between 
  items-center text-center bg-gradient-to-l from-slate-50 w-full whitespace-nowrap
  py-4 px-10 drop-shadow-xl mb-10 text-cyan-900 avg:flex-col avg:mb-8
  avg:p-2">
  <div>
    <h1 class="text-8xl font-all font-black pt-2 mb-8 avg:text-6xl avg:mb-8">役に立たぬ漢字辞書</h1>
    <a class="text-cyan-600" href="https://kanjiapi.dev/">利用させて頂いたAPIはこちら</a>
  </div>
    <div class="pl-10 flex gap-10 avg:gap-5 text-4xl text-center avg:my-8 avg:text-2xl">
        <a class="" href="https://twitter.com/youyuxi">仮</a>
        <a class="border-dotted border-l-4 border-cyan-600 pl-4" 
        href="https://twitter.com/vuejs">ツイッター</a>
        <a class="border-dotted border-l-4 border-cyan-600 pl-4" 
        href="https://github.com/vuejs/core">フレームワーク</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {

  }
}
</script>