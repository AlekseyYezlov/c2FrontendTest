<template>
  <div class="questionsAnswers">
    <div class="title">
      Form Data
    </div>
    <div class="answer">
      Validation should be made in component to props, if we use Typescript we
      can easy validate on any type that we need by creating an interface. Also
      before we send data we always check all fields and give an error to user.
      The error can be shown by notification and put inputs fields in error mode
      where we have wrong data. Also sometimes for some cpecific data we can use
      masks on oinput. Often we use some notifications cause we can easy control
      them and say user where the problem is, cause standard error mode for
      fields is not fully understandable. As I think, if the system is large and
      it is not clear what to do there is a good idea to make step guide with
      some modals that would tell user what happens if he will make some action.
      Big problem for validation also is a big amount of data, for example some
      carts like you have in magento or etc. Better to make stepper that on each
      step you need to add some specific data category. It is easier to validate
      small components of step then a big form data and also it can help in
      debugging
    </div>

    <div class="title">
      Testing
    </div>
    <div class="answer">
      Testing utils can help a lot to test data and save time to QA. There was
      no testing in my projects, cause the customers didn`t want to spend time
      on it. But for my own I`ve tried vue test-utils to understand how it
      works. It`s easy to use and easy to write code. You need to import lib and
      component and see if it is mounted do we have some special classes and
      etc. For example we can give another array of objects to Plans component
      and we would expect error cause there is validator.
    </div>

    <div class="title">
      Working with Backend / APIs
    </div>
    <div class="answer">
      There was many diffrent ways to load data or push it from server, from
      AJAX calls to some method on server to GrapghQl. Also there were almostly
      all APIs like some open APIs and internal by api key. It was REST apis
      mostly. When you make some api call you should always have catcher to
      catch error, cause there are many things like expired token or forbidden
      or antoher things. Also for some specific errors you can make interceptor
      that will have some specific logic on specific code error. When there is
      an error from api call the user should also see some info why he cannot
      see the infromation from api call. In this case there should be some text
      describing problem and also some notification. Also the good practice is
      to save some data to local storage or session storage, it helps not to use
      Api calse many times, for example login togen, and some user data
    </div>
  </div>
</template>

<script>
export default {
  name: 'Questions',
};
</script>

<style lang="scss" scoped>
.questionsAnswers {
  .title {
    font-size: 25px;
    margin-bottom: 20px;
  }
  .answer {
    margin-bottom: 30px;
  }
}
</style>
