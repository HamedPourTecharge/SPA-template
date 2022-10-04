<script lang="ts">
    export let neonTest:string
</script>


<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet">
</svelte:head>
<div class="h-full bg-black">
    <h1 class="neonText flex justify-center ">{neonTest}</h1>
</div>

<style>
    .neonText {
        color: #fff;
        text-shadow: 0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 42px #0fa,
        0 0 82px #0fa,
        0 0 92px #0fa,
        0 0 102px #0fa,
        0 0 151px #0fa;
    }

    h1 {
        font-size: 7.2rem;
        animation: flicker 1.5s infinite alternate;
        font-family: "Sacramento", sans-serif;
    }

    /* Flickering animation */
    @keyframes flicker {

        0%, 18%, 22%, 25%, 53%, 57%, 100% {

            text-shadow: 0 0 4px #fff,
            0 0 11px #fff,
            0 0 19px #fff,
            0 0 40px #0fa,
            0 0 80px #0fa,
            0 0 90px #0fa,
            0 0 100px #0fa,
            0 0 150px #0fa;

        }

        20%, 24%, 55% {
            text-shadow: none;
        }
    }

</style>