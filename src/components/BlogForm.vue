<template>
    <form>
        <div id="align">
            <div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Titre de la Page</label>
                    <input type="text" class="form-control" id="" disabled="disabled" value="title.page">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Meta Title</label>
                    <input type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Meta Description</label>
                    <input type="text" class="form-control">
                </div>
            </div>
            <div id="img">
                <img src="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg"
                    alt="image blog">
                <a href="#">Modifier l'image</a>
            </div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Meta Description</label>
            <textarea class="form-control" > </textarea>
        </div>

        <button type="submit" class="btn btn-primary">Valider les modifications</button>
    </form>
</template>

<script>

</script>

<style scoped>
    form {
        width: 40%;
        border: solid 1px black;
    }

    #align {
        display: flex;
        justify-content: space-around;
        margin-top: 50px;
    }
    #align input {
        width: 60%;
        text-align: center;
    }
    #align .mb-3 {
        display: flex;
        justify-content: space-between;
    }

    #img {
        width: 30%;
        display: grid;
    }

    #img img {
        width: 80%;
        margin: 0 auto;
        border: black 1px solid;
        height: auto;
    }
    #img a {
        text-decoration: none;
        color: black;
        font-size: 18px;
    }
    #metaDes {
        width: 80%;
        margin: 0 auto;
    }
</style>