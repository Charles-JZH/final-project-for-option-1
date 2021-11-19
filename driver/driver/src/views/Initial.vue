<template>
  <div class="container">
    <div class="front">
      <b-card bg-variant="success" text-variant="white" header="Instructions" align="left">
        <p>Charles Jiang 14848</p>
        <p>Please choose one application to run</p>
      </b-card>
    </div>

    <div class="front">
        <el-button
            type="success"
            @click="jupyterNotebook"
            round
            style="margin-top: 10px; margin-bottom: 10px"
        >
            Jupyter-Notebook
        </el-button>
        <el-button
            type="success"
            @click="spark"
            round
            style="margin-top: 10px; margin-bottom: 10px"
        >
            Spark
        </el-button>
        <el-button
            type="success"
            @click="hadoop"
            round
            style="margin-top: 10px; margin-bottom: 10px"
        >
            Hadoop
        </el-button>
        <el-button
            type="success"
            @click="sonar"
            round
            style="margin-top: 10px; margin-bottom: 10px"
        >
            Sonar
        </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'initial',
  data () {
    return {
      userAgent: null
    }
  },

  methods: {
    jupyterNotebook () {
      window.location.href = 'http://34.139.10.198:8888'
    },
    spark () {
      window.location.href = 'http://35.243.135.200:8080'
    },
    hadoop () {
      window.location.href = 'http://34.73.72.95:50070'
    },
    sonar () {
      window.location.href = 'http://35.196.77.195:9000'
    }
  }
}
</script>
