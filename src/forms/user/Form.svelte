<script>
    import { Form, Input, Select, Choice } from 'sveltejs-forms';
    import schema from './schema.js'
    export let initialValues = {};
    export let handleSubmit = () => {};
    export let handleCancel = () => {};
    let errors={};
    const setErrors = (err) => errors = err;
    const genderCh = [{id: 'М', title: 'М'}, {id: 'Ж', title: 'Ж'}];
    const groupOpts = [{id: 'L1', title: 'L1'}, {id: 'L2', title: 'L2'}];
</script>

<Form
    {schema}
    {initialValues}
    validateOnBlur={false}
    validateOnChange={false}
    on:submit={handleSubmit.bind(this, setErrors)}
    on:reset={handleCancel.bind(this, setErrors)}
    let:isSubmitting
    let:isValid
    let:touched
>
    <Input
        name="login"
        label="Логин"
        placeholder="Логин" />
    {#if errors["login"] && touched["login"]}
        <div class="message">{errors["login"]}</div>
    {/if}
    <Input
        name="password"
        type="password"
        label="Пароль"
        placeholder="Пароль" />
    {#if errors["password"] && touched["password"]}
        <div class="message">{errors["password"]}</div>
    {/if}
    <Input
        name="first_name"
        label="Имя"
        placeholder="Иван" />
    {#if errors["first_name"] && touched["first_name"]}
        <div class="message">{errors["first_name"]}</div>
    {/if}
    <Input
        name="last_name"
        label="Фамилия"
        placeholder="Иванов" />
    {#if errors["last_name"] && touched["last_name"]}
        <div class="message">{errors["last_name"]}</div>
    {/if}
    <Input
        name="patronymic"
        label="Очество"
        placeholder="Ивнович" />
    {#if errors["patronymic"] && touched["patronymic"]}
        <div class="message">{errors["patronymic"]}</div>
    {/if}
    <Select
        label="Группа"
        name="age_group"
        options={groupOpts} />
    {#if errors["age_group"] && touched["age_group"]}
        <div class="message">{errors["age_group"]}</div>
    {/if}
    <label>Пол</label>
    <Choice
        name="gender"
        options={genderCh} />
    {#if errors["gender"] && touched["gender"]}
        <div class="message">{errors["logendergin"]}</div>
    {/if}
    <button type="reset">Отмена</button>
    <button type="submit">Отправить</button>
</Form>

<style>
</style>