<template>
  <div>
    <Form>
      <Field type="text" name="text" rules="required">
      </Field>
      <div>
          <ErrorMessage name="text"/>
        </div>
      <div>
        <button>
          登録
        </button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "@/mixins/validation.js";
export default {
  name: "Component",
  components: {
    Field: Field,
    ErrorMessage: ErrorMessage,
    Form: Form,
  },
  setup() {}
}
</script>