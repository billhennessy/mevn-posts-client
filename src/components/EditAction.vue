<template>
  <div class="actions">
    <h1>Edit Action</h1>
    <div class="form">
     

      <div>
        <input type="text" name="action" placeholder="ACTION" v-model="action" />
      </div>
      <div>
        <input type="text" name="date" placeholder="DATE" v-model="date" />
      </div>
      <div>
        <input type="text" name="value" placeholder="VALUE" v-model="value" />
      </div>
      <div>
        <input type="text" name="user" placeholder="USER" v-model="user" />
      </div>
      <div>
        <input type="text" name="payload" placeholder="PAYLOAD" v-model="payload" />
      </div>

      <div>
        <button class="app_action_btn" @click="updateAction">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import ActionsService from "@/services/ActionsService";
export default {
  name: "EditAction",
  data() {
    return {
   
      action: "",
      date: "",
      value: "",
      user: "",
      payload: ""
    };
  },
  mounted() {
    this.getAction();
  },
  methods: {
    async getAction() {
      const response = await ActionsService.getAction({
        id: this.$route.params.id
      });
      
      this.action = response.data.action;
      this.date = response.data.date;
      this.value = response.data.value;
      this.user = response.data.user;
      this.payload = response.data.payload;
    },
    async updateAction() {
      await ActionsService.updateAction({
        id: this.$route.params.id,
      
        action: this.action,
        date: this.date,
        value: this.value,
        user: this.user,
        payload: this.payload
      });
      this.$router.push({ name: "Actions" });
    }
  }
};
</script>
<style type="text/css">
.form input,
.form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_action_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>