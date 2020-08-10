<template>
  <div :class="$style['vehicle-image-container']">
    <div
      ref="vehicle_image"
      :class="$style['vehicle-image']"
      @click="$refs.file_input.click()"
    >
      <svg v-if="image_svg_required" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12V15H22V17H19V20H17V17H14V15H17V12H19ZM19.008 0C19.556 0 20 0.445 20 0.993V10.342C19.3576 10.1151 18.6813 9.99944 18 10V2H2L2.001 16L11.293 6.707C11.465 6.53448 11.694 6.43073 11.9371 6.41526C12.1802 6.39979 12.4206 6.47367 12.613 6.623L12.706 6.708L16.252 10.258C15.4766 10.4943 14.7572 10.8851 14.1369 11.407C13.5167 11.9288 13.0086 12.5709 12.6432 13.2944C12.2779 14.0179 12.0628 14.808 12.0111 15.6169C11.9593 16.4258 12.0719 17.2368 12.342 18.001L0.992 18C0.728813 17.9997 0.476497 17.895 0.290489 17.7088C0.104482 17.5226 -1.33455e-07 17.2702 0 17.007V0.993C0.00183004 0.730378 0.1069 0.479017 0.292513 0.293218C0.478126 0.107418 0.72938 0.00209465 0.992 0H19.008ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z" fill="#4959FF"/></svg>
    </div>
    <input 
      ref="file_input" 
      type="file"
      accept=".jpg, .jpeg, .png"
      :class="$style['file-input']"
      @change="set_vehicle_image"
    >  
  </div>
</template>

<script>
export default {
  data () {
    return {
      /**
       * Требуется ли отображать svg
       * внутри блока изображения
       * транспортного средства.
       */
      image_svg_required: true
    }
  },
  methods: {
    /**
     * Устанавливает изображение транспорта.
     */
    set_vehicle_image () {
      const file = this.$refs.file_input.files[0]

      if (!/image/.test(file.type)) return

      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        const result = reader.result

        this.image_svg_required = false
        this.vehicle_image = result
        this.$refs.vehicle_image.style.backgroundImage = `url(${result})`
        this.$emit('update-vehicle-image', result)
      }
    }
  }
}
</script>

<style module lang="scss">
  .vehicle-image-container {
    margin-bottom: 1rem;
    border: 2px solid transparent;
    border-radius: 24px;

    &:hover {
      border-color: $violet;
    }
  }

  .vehicle-image {
    cursor: pointer;
    position: relative;
    height: 320px;
    border-radius: 24px;
    background-color: $grey;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    svg {
      position: absolute;
      left: 50%;
      top: 50%;
      width: .875rem;
      height: .875rem;
      transform: translate(-50%, -50%);
      fill: $violet;
    }
  }

  .file-input {
    display: none !important;
  }
</style>
