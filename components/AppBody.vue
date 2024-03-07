<template>
    <div class="Body">
        <div class="Banner">Banner</div>
        <div class="Contents">
            <h1>Hello, World!</h1>
            <p>Look at my website</p>
            <div class="LinkList">
                <a
                    target="_blank"
                    href="https://youtu.be/dQw4w9WgXcQ"
                    class="CustomButton"
                    >Here</a
                >
                <a
                    target="_blank"
                    href="https://youtu.be/9MCiixIkzUk"
                    class="CustomButton"
                    >And here</a
                >
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.Body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 3% 5%;
}

.Banner {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background-color: green;
    color: white;
}

.LinkList {
    display: flex;
}

.CustomButton {
    display: block;
    align-items: center;
    width: 10%;
    padding: 5px 5px;
    margin-right: 20px;
    background-color: lightgreen;
    color: black;
}
</style>
