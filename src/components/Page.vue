<template>
  <div class="container avg:px-0 px-20 flex items-center h-[600px] text-cyan-900 avg:flex-col">
    <div class="border-8 w-[34rem] h-[34rem] flex justify-center 
    items-center avg:w-[17rem] avg:[h-17] rounded-xl">
      <p class="font-all text-[400px] font-black mt-[-50px] text-cyan-900
      avg:text-[200px] avg:mt-[-30px] avg:m-0 ">{{text.charAt(0) || ''}}</p>
    </div>
    <div class="text-4xl font-all mb-4 ml-16 items-start w-[500px] h-[530px] 
    avg:my-8 avg:m-0 avg:flex flex-col">
      <input class="text-6xl font-black border-4 w-[50rem] mb-10 p-8 py-6 rounded-xl
      avg:ml-0 avg:py-2 avg:px-4 avg:w-[25rem] avg:mx-0 avg:my-auto "
       placeholder="最初の一文字の漢字を読み込みます" :value="text" @input="onInput">
      <div class="avg:flex flex-col justify-center">
        <p class="pb-12 avg:pb-8"> 意味: {{meaning || ''}} </p>
        <p class="pb-12 avg:pb-8"> 音読: {{onyomi || ''}} </p>
        <p class="pb-12 avg:pb-8"> 訓読: {{kunyomi || ''}} </p>
        <p class="pb-12 avg:pb-8"> 画数: {{strokes || ''}} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  components: {
  },
  data() {
    return {
      text: '',
      firstChar: '',
      url: 'https://kanjiapi.dev/v1/kanji/',
      meaning: '',
      onyomi: '',
      kunyomi: '',
      strokes: '',
      showWarning: false,
    }
  },
  methods: {  
    async fetchKanjiData(link) {
        const res = await fetch(link);
        const data = await res.json();
        return data
    },
    joindata() {

    },
    onInput(e) {
      this.text = e.target.value
      this.firstChar = e.target.value.charAt(0)
      // fetch(`https://script.google.com/macros/s/AKfycbyPQ_ElGD7TXPclSRCJIb4cTyVstiAGAJv3mMW1yklY_b6k8X1e2JXWVOpwERMlEOs/exec?q=HAHAHA`, {
      //   redirect: "follow",
      //   method: "POST",
      //   body: JSON.stringify(this.text),
      //   headers: {
      //     "Content-Type": "text/plain;charset=utf-8",
      //   }
      // });
    },
    clearText() {
        this.meaning = ''
        this.onyomi = ''
        this.kunyomi = ''
        this.strokes = ''
    },
  },  
  watch: {
    async firstChar() {
        this.clearText()
        if (this.text.length !== 0) {
          this.url = `https://kanjiapi.dev/v1/kanji/${this.firstChar}`
          const data = await this.fetchKanjiData(this.url)
          this.meaning = data.meanings.join(', ')
          this.onyomi = data.on_readings.join(', ')
          this.kunyomi = data.kun_readings.join(', ')
         
          this.strokes = data.stroke_count
        } else {
          this.clearText()
      }
    },
  },
  async created() {
        this.text = '例'
        this.url = `https://kanjiapi.dev/v1/kanji/例`
        const data = await this.fetchKanjiData(this.url)
        this.meaning = data.meanings.join(', ')
        this.onyomi = data.on_readings.join(', ')
        this.kunyomi = data.kun_readings.join(', ')
        this.strokes = data.stroke_count
  }
}
</script>