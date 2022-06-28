<template>
  <div class="container px-20 flex items-center h-[600px] text-cyan-900">
    <div class="border-8  w-[34rem] h-[34rem] flex justify-center items-center">
      <p class="font-all text-[400px] font-black mt-[-50px] rounded 
      ">{{text.charAt(0) || ''}}</p>
    </div>
    <div class="text-4xl font-all mb-4 ml-16 items-start w-[500px] h-[530px]">
      <input class="text-2xl border-4 w-[30rem] mb-10 p-2 rounded-xl"
       placeholder="最初の一文字の漢字を読み込みます" :value="text" @input="onInput">
      <p class="pb-12">意味: {{meaning || ''}}</p>
      <p class="pb-12">音読: {{onyomi || ''}}</p>
      <p class="pb-12">訓読: {{kunyomi || ''}}</p>
      <p class="pb-12">画数: {{strokes || ''}}</p>
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
      showWarning: false
    }
  },
  methods: {  
    async fetchKanjiData(link) {
      const res = await fetch(link);
      const data = await res.json()
      return data
    },
    onInput(e) {
      this.text = e.target.value
      this.firstChar = e.target.value.charAt(0)
    }
  },  
  watch: {
    async firstChar() {
      if (this.text.length !== 0) {
        this.url = `https://kanjiapi.dev/v1/kanji/${this.firstChar}`
        const data = await this.fetchKanjiData(this.url)
        
        this.meaning = data.meanings.join(', ')
        this.onyomi = data.on_readings.join(', ')
        this.kunyomi = data.kun_readings.join(', ')
        this.strokes = data.stroke_count
        console.log(data)
      } else {
        this.meaning = ''
        this.onyomi = ''
        this.kunyomi = ''
        this.strokes = ''
        this.showWarning = true
      }
    }
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