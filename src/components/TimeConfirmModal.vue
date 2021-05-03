<template>
    <div class="time-confirm-modal-container">
        <div class="time-confirm-title">When did you play?</div>
        <div>
            <input class="time-input" type="text" placeholder="yyyy" />
            <input class="time-input" type="text" placeholder="mm" />
            <input class="time-input" type="text" placeholder="dd" />
            <input class="time-input" type="text" placeholder="hh" />
            <input class="time-input" type="text" placeholder="mm" />
        </div>
    </div>  
</template>

<script>
export default {
    name:"TimeConfirmModal"

}
</script>

<style>

.time-confirm-modal-container {
    display: flex;
    flex-direction: column;
    border-style: solid;
    height: 25vh;
}

.time-confirm-title {
    margin-bottom: 5%;
}

.time-input {
    width:5%;
}

</style>