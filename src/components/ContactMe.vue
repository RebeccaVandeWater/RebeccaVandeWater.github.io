<template>
  <div class="bg-gray-900 rounded-md sm:w-2/3 xl:w-1/3 p-5 m-3">
    <p class="text-2xl font-semibold font-montserrat text-center text-white">
      Contact Me
    </p>
    <form action="https://formsubmit.co/becca.vandewater@gmail.com" method="POST" class="flex flex-col">
      <div class="flex flex-col sm:flex-row justify-around">
        <div class="m-2">
          <label for="firstName" class="text-white">First Name</label>
          <input type="text" name="firstName" id="firstName" title="first name" class="w-full pl-2" minlength="3"
            maxlength="50" required>
        </div>
        <div class="m-2">
          <label for="lastName" class="text-white">Last Name</label>
          <input type="text" name="lastName" id="lastName" title="last name" class="w-full pl-2" minlength="3"
            maxlength="50" required>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row justify-around">
        <div class="m-2">
          <label for="email" class="text-white">E-mail</label>
          <input type="email" name="email" id="email" title="email" class="w-full pl-2" minlength="10" maxlength="100"
            required>
        </div>
        <div class="m-2">
          <label for="phone" class="text-white">Phone Number</label>
          <input type="tel" id="phone" name="phone" title="phone number" class="w-full pl-2" maxlength="50">
        </div>
      </div>
      <div class="flex flex-col mt-3">
        <label for="comments" class="m-2 text-white">Comments, questions, and other information!</label>
        <textarea name="comments" id="comments" cols="30" rows="10" class="w-auto pl-2 pt-1" maxlength="700"
          required></textarea>
      </div>
      <div class="text-end m-2 mt-3">
        <button
          class="bg-green-400 text-black rounded-lg p-1 px-3 font-semibold shadow-lg shadow-green-600/50 hover:shadow-green-400/50"
          role="submit" title="send">
          Send
        </button>
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

<style lang="scss" scoped>
input {
  border-radius: .25em;
  border: 1px solid rgb(214, 213, 213);
}

textarea {
  border-radius: .5em;
  border: 1px solid rgb(214, 213, 213);
}
</style>