<template>
    <div class="subscribe">
        <div>
            <h1 class="section_title">Subscribe</h1>
            <div class="w-embed">
            </div>
            <div class="form">
                <div class="w-form">
                    <form id="wf-form-Subscribe" name="wf-form-Subscribe" data-name="Subscribe" method="get"
                        class="form-2" data-wf-page-id="66f27cba76efd0f24ff955c7"
                        data-wf-element-id="2c0e4e96-4a0a-ac46-cbdc-59fd2de202fe">
                        <input class="subscribe_input w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="First Name" type="text" id="name-2">
                        <input class="subscribe_input w-input" maxlength="256" name="email-3" data-name="Email 3" placeholder="Last Name" type="text" id="email-3" :required="true">
                        <input class="subscribe_input w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="E-Mail" type="email" id="email-2" :required="true">
                        <input type="submit" data-wait="Please wait..." class="button subscribe_button w-button" value="Subscribe">
                    </form>
                    <div class="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div class="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.Subscribe_Input {
    outline: none;
    border: none;
}

textarea:focus,
input:focus {
    outline: none;
}

.w-input,
.w-select {
    border-top: none;
    border-left: none;
    border-right: none;
}

.w-input::placeholder {
    color: #333;
    opacity: 0.3;
}
</style>