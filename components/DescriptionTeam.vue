<template>
  <article>
    <p>{{ vehicle.team_text }}</p>
    <h2>Qualified specialists</h2>
    <div :class="$style['team-block']">
      <div :class="$style['person']">
        <img src="/images/1.jpg" alt="person-1">
        <div :class="$style['person-data']">
          <h3>Marvin McKinney</h3>
          <h4>Pilot assistent</h4>
        </div>
      </div>
      <div :class="$style['person']">
        <img src="/images/2.jpg" alt="person-2">
        <div :class="$style['person-data']">
          <h3>Savannah Nguyen</h3>
          <h4>Mechanic</h4>
        </div>
      </div>
      <div :class="$style['person']">
        <img src="/images/3.jpg" alt="person-3">
        <div :class="$style['person-data']">
          <h3>Courtney Henry</h3>
          <h4>Stewardess</h4>
        </div>
      </div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quasi suscipit cumque facere consectetur accusantium rerum fuga vel similique, enim quam tenetur ullam dolor, doloremque modi nesciunt eum deleniti excepturi?</p>
  </article>
</template>

<script>
export default {
  props: {
    /**
     * Объект содержащий данные
     * по транспортному средству.
     */
    vehicle: {
      type: Object,
      required: true
    }
  }
}
</script>

<style module lang="scss">
  .team-block {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 425px) {
      display: block;
    }
  }

  .person {
    width: 30%;

    @media screen and (max-width: 425px) {
      width: 100%;
      display: flex;
      margin-bottom: 1rem;
    }

    img {
      display: block;
      width: 100%;
      margin-bottom: 1rem;
      border-radius: 24px;

      @media screen and (max-width: 425px) {
        width: 50%;
        margin-bottom: 0;
      }
    }
  }

  .person-data {
    @media screen and (max-width: 425px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 1rem;
    }

    h3 {
      margin-bottom: .5rem;
    }
  }
</style>
