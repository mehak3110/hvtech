<template>
    <div id="grad">
        <v-container>
            <v-carousel cycle hide-delimiter-background show-arrows-on-hover height="auto">
                <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition">
                </v-carousel-item>
            </v-carousel>

            <div class="block latestPostBlock">
                <v-container>
                    <h2 class="text-center">Our Games</h2>
                    <v-row>
                        <v-col v-for="item in apps" :key="item.id" cols="10" md="4" lg="3" class="mx-auto">
                            <v-card outlined class="mx-auto ma-3 text-center">
                                <v-responsive class="pt-4">
                                    <v-avatar height="70px" width="70px">
                                        <v-img class="white--text align-end" :src="item.src"></v-img>
                                    </v-avatar>
                                </v-responsive>
                                <v-card-text>
                                    <div class="text-button" style="color: black;">{{ item.title }}</div>
                                </v-card-text>
                                <v-card-actions class="center">
                                    <v-btn color="primary" text>More</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </v-container>
    </div>
</template>



<script>

export default {
    data() {
        return {
            items: [
                {
                    src: require("../assets/images/img-carousel1.jpeg")
                },
                {
                    src: require("../assets/images/img-carousel2.jpeg")
                }
            ],
            apps: [
                {
                    src: require("../assets/icons/Avoid.png"),
                    title: 'Avoid'
                },
                {
                    src: require("../assets/icons/Dodge.png"),
                    title: 'Dodge'
                },
                {
                    src: require("../assets/icons/Fast.png"),
                    title: 'Fast'
                },
                {
                    src: require("../assets/icons/Walls.png"),
                    title: 'Walls'
                },
            ]
        };
    }
}
</script>



<style lang="scss" scoped>

#grad {
    background-color: #333333;
}

.block {
  padding: 60px 0;
  border-bottom: 1px solid darken(#fff, 10%);

  @media only screen and (max-width: 599px) {
    padding: 20px 0;
  }

  h2 {
    font-size: 30px;
    color: #ffff00;
    padding: 0 0 10px;
    margin: 0 0 40px;
    position: relative;

    @media only screen and (max-width: 599px) {
      font-size: 24px;
      padding: 0 0 5px;
      margin: 0 0 25px;
    }

    &:after {
      content: '';
      background: #ffff00;
      width: 60px;
      height: 2px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      @media only screen and (max-width: 599px) {
        width: 30px;
      }
    }
  }
}

</style>