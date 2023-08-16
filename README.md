#  Portfolio in progress

<!-- Statistic Component -->
<div align="center">
    <div id="statistic-body">
        <div class="component">
            <div class="image-content">
                <img src="./public/readme/icons/business_center_white_24dp.svg"/>
            </div>
            <p class="number">3+</p>
            <p class="label">Años de Exp.</p>
        </div>
        <div class="component">
            <div class="image-content">
                <img src="./public/readme/icons/phonelink_white_24dp.svg"/>
            </div>
            <p class="number">30+</p>
            <p class="label">Proyectos</p>
        </div>
        <div class="component">
            <div class="image-content">
                <img src="./public/readme/icons/school_white_24dp.svg"/>
            </div>
            <p class="number">3+</p>
            <p class="label">Certificados</p>
        </div>
    </div>
</div>
<style>
    :root {
        --component-color: #9F61CE;
    }
    #statistic-body {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 800px;
        height: 100px;
        gap: 20px;
    }
    #statistic-body .component {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border: 2px dashed;
        backdrop-filter: invert(10%);
        border-radius: 50px 5px 50px 5px;
        color: var(--component-color);
    }
    #statistic-body .component .number {
        display: flex;
        position: absolute;
        font-size: 40px;
        font-weight: 600;
        top: 10px;
    }
    #statistic-body .component .label {
        display: flex;
        position: absolute;
        opacity: 70%;
        top: 60px;
    }
    #statistic-body .component .image-content {
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        top: -12px;
        left: 50px;
        border-radius: 1.5px;
        background-color: var(--component-color);
    }
    #statistic-body .component .image-content img {
        width: 22px;
        height: 22px;
    }
</style>
<!-- Statistic Component -->