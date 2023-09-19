<template>
  <div class="bg-slate-100 w-2/3">
    <form action="">
      <div>
        <label for="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" title="first name">
      </div>
      <div>
        <label for="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" title="last name">
      </div>
      <div>
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" title="email">
      </div>
      <div>
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" title="phone number">
      </div>
      <div>
        <label for="comments">Comments, questions, and other information!</label>
        <textarea name="comments" id="comments" cols="30" rows="10"></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {

  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped></style>