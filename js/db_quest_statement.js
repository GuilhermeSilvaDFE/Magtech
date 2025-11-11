export default function  dataBase(){
   let db = [
          {
            statements: ` 
               <div class="param">
                    Qual a intensidade de um campo magnético em um solenóide
                    com <div class="zone wraper-values-quest"><div class="values-quest">75</div></div> espiras,
                    que se encontra num local onde μ0=<div class="zone wraper-values-quest"><div class="values-quest" >12⋅10<sup>-7</sup></div></div>T⋅m/A, quando 
                    é percorrido por uma corrente elétrica de <div class="zone wraper-values-quest"><div class="values-quest">6</div></div>A ao longo de um fio de
                    <div class="zone wraper-values-quest"><div class="values-quest">3</div></div> metros de comprimento?
                </div>`,
            inlustration:"../img/inlustrations/image-1.png",
                resolved: false,
            id: "01",
            resposta:"[150*μ0]",
            calculos: `
                <div class="conteiner-calculos">
                    <div class="expresion formulas">
                        <div class="equal">
                                <div class="constantes caracteres"><span class="letter">B</spn></div>
                                <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres"><span class="letter">μ0</span></div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres"><span class="letter">N</span></div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres"><span class="letter">I</span></div>
                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres"><span class="letter values-quest">L</span></div>
                            
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">12 · 10<sup>-7</sup> </div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">75</div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">6</div>

                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">3</div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">5400</div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">10 <sup>-7</sup> </div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">1,8 . 10<sup>-4</sup>T</div>
                        </div>
                        
                    </div>
                </div>    
            `
            
        },
        {
            statements: ` 
                <div class="param">
                    Uma bobina contém <div class="zone wraper-values-quest"><div class="values-quest">80</div></div> espiras circulares de raio igual a <div class="zone wraper-values-quest"><div class="values-quest">0.8</div></div>m. Determine o campo magnético 
                    nela quando ela é percorrida por uma corrente elétrica de <div class="zone wraper-values-quest"><div class="values-quest">5.5</div></div> A. Cosidere:  μ0 = <div class="zone wraper-values-quest"><div class="values-quest">12 · 10<sup>-7</sup></div></div> T · m/A.
                </div>`,
            inlustration:"../img/inlustrations/image-2.png",
                resolved: false,
            id: "02",
            calculos:`
                 <div class="conteiner-calculos">
                    <div class="expresion formulas">
                        <div class="equal">
                                <div class="constantes caracteres"><span class="letter">B</spn></div>
                                <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres"><span class="letter">μ0</span></div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres"><span class="letter">N</span></div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres"><span class="letter">I</span></div>
                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres"><span class="letter values-quest">2</span></div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres"><span class="letter">R</span></div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">4π · 10<sup>-7</sup> </div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">80</div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">5,5</div>

                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">0,8</div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">1760π</div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">10<sup>-7</sup> </div>
                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">1,6</div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">1100π</div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">10<sup>-7</sup> </div>
                        </div>
                        
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">1100</div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">3,14</div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">10<sup>-7</sup></div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">3454</div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">10<sup>-7</sup></div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">34,54·10<sup>-4</sup></div>
                        </div>
                    </div>
                </div>
            `,
            resposta: "[275*μ0]"
            
        }, 
        {
            statements:`
                <div class="param">
                    Uma espira circular de raio  <div class="zone wraper-values-quest"><div class="values-quest">0.04π</div></div> m encontra-se no vácuo (μo = <div class="zone wraper-values-quest"><div class="values-quest">4π · 10<sup>-7</sup></div></div> T · m/A) e é 
                    percorrida por uma corrente elétrica de intensidade i gerando um campo magnético de <div class="zone wraper-values-quest"><div class="values-quest">2</div></div> T. Calcule a intensidade dessa corrente elétrica.
                </div>
            `,
            inlustration:"../img/inlustrations/image-3.png",
            resolved: false,
            id:"03",
            resposta:"[(160287714/318882275)*μ0^(-1)]",
            calculos:`
                <div class="conteiner-calculos">
                    <div class="expresion formulas">
                        <div class="equal">
                                <div class="constantes caracteres">B</div>
                                <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">μ0</div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">I</div>
                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">R</div>
                            
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">4π · 10<sup>-7</sup> </div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">i</div>

                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">4π · 10<sup>-2</sup></div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">4π · 10<sup>-7</sup> </div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">i</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">4π · 10<sup>-2</sup></div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">i</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">4π</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10 <sup>-2</sup></div>
                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">4π</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10 <sup>-7</sup></div>
                        </div>
                        
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">i</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres">4</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10 <sup>+7</sup></div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10 <sup>-2</sup></div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">i</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres">4</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>+5</sup>A</div>
                        </div>
                    </div>
                </div>
            `
        },  
        {
            statements: ` 
                <div class="param">
                   Um condutor reto e extenso é percorrido por uma corrente de intensidade <div class="zone wraper-values-quest"><div class="values-quest">2</div></div>A. Calcular a 
                   intensidade do vetor campo magnético num ponto P localizado a <div class="zone wraper-values-quest"><div class="values-quest">0.1</div></div> m do condutor.
                   O meio é o vácuo μo = <div class="zone wraper-values-quest"><div class="values-quest">4π · 10<sup>-7</sup></div></div> T · m/A.  
                </div>`,
            inlustration:"../img/inlustrations/image-4.png",
                resolved: false,
            id: "04",
            resposta:"[10*pi^(-1)*μ0]",
            calculos:`
                <div class="conteiner-calculos">
                    <div class="expresion formulas">
                        <div class="equal">
                                <div class="constantes caracteres">B</div>
                                <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">μ0</div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">I</div>
                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">π</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">R</div>
                            
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">4π · 10<sup>-7</sup></div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">2</div>

                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">π</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">0,1</div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres">4</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>-7</sup></div>
                        </div>
                         <div class="denominador">
                            <div class="constantes caracteres">10<sup>-1</sup></div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres">4</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>-7</sup></div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>+1</sup></div>
                        </div>
                        
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                       <div class="numerador"> 
                            <div class="constantes caracteres">4</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>-6</sup></div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres">4</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">4,0 · 10<sup>-6</sup>T</div>
                        </div>
                    </div>
                </div>
            `
            
        },
        {
            statements: ` 
                <div class="param">
                   Uma espira circular de raio R é percorrida por uma corrente de intensidade I. Calcule o 
                   valor do campo de indução magnética supondo que o raio dessa espirra
                   seja de <div class="zone wraper-values-quest"><div class="values-quest">3π</div></div> e a corrente elétrica seja de <div class="zone wraper-values-quest"><div class="values-quest">9</div></div> A. Adote μo = <div class="zone wraper-values-quest"><div class="values-quest">4π · 10<sup>-7</sup></div></div>T · m/A. 
                </div>`,
            inlustration:"../img/inlustrations/image-5.png",
                resolved: false,
            id: "05",
            resposta:"[(3/2)*pi^(-1)*μ0]",
            calculos:`

                 <div class="conteiner-calculos">
                    <div class="expresion formulas">
                        <div class="equal">
                                <div class="constantes caracteres">B</div>
                                <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">μ0</div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">I</div>
                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">R</div>
                            
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">4π · 10<sup>-7</sup></div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">9</div>

                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">3</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">π</div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">9</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>-7</sup></div>
                        </div>
                         <div class="denominador">
                            <div class="constantes caracteres">3</div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres">18</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>-7</sup></div>
                        </div>
                         <div class="denominador">
                            <div class="constantes caracteres">3</div>
                        </div>
                        
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                       <div class="numerador"> 
                            <div class="constantes caracteres">6 · 10<sup>-7</sup>T</div>
                        </div>
                    </div>
                </div>
             `
            
        },
        {
            statements:`
            <div class="param">
                Calcule o campo magnético em uma bobina chata de <div class="zone wraper-values-quest"><div class="values-quest">1000</div></div> espiras e raio <div class="zone wraper-values-quest"><div class="values-quest">0.25</div></div> m quando ela 
                é percorrida por uma corrente elétrica de <div class="zone wraper-values-quest"><div class="values-quest">0.6</div></div> A. Dado: μo = <div class="zone wraper-values-quest"><div class="values-quest">4π · 10<sup>-7</sup></div></div> T · m/A. 
            </div>
            `,
            inlustration:"../img/inlustrations/image-6.png",
            resolved: false,
            id:"06",
            resposta:"[1200*μ0]",
            calculos: `
                  <div class="conteiner-calculos">
                    <div class="expresion formulas">
                        <div class="equal">
                                <div class="constantes caracteres">B</div>
                                <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">μ0</div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">I</div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">N</div>
                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">R</div>
                            
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">4π · 10<sup>-7</sup></div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">10<sup>3</sup></div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">0,6</div>

                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">0,25</div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres">2,4π</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>-4</sup></div>
                        </div>
                         <div class="denominador">
                            <div class="constantes caracteres">0,5</div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres">4,8π</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>-4</sup>T</div>
                        </div>
                        
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres">1,5 · 10<sup>-5</sup>T</div>
                        </div>
                        
                    </div>
                </div>
            `
        }, 
        {
            statements:`
                <div class="param">
                    Uma bobina chata, formada por <div class="zone wraper-values-quest"><div class="values-quest">100</div></div> espirais que possui um raio igual a <div class="zone wraper-values-quest"><div class="values-quest">0.03</div></div> m é atravessada 
                    por uma corrente elétrica i gerando um campo magnético de módulo <div class="zone wraper-values-quest"><div class="values-quest">4</div></div> T. adotando μo = <div class="zone wraper-values-quest"><div class="values-quest">4π · 10<sup>-7</sup></div></div> T · m/A, qual o valor da corrente elétrica?
                </div>
            `,
            inlustration:"../img/inlustrations/image-7.png",
            resolved: false,
            id:"07",
            resposta:"[(3/1250)*μ0^(-1)]",
            calculos:`
               <div class="conteiner-calculos">
                    <div class="expresion formulas">
                        <div class="equal">
                                <div class="constantes caracteres">B</div>
                                <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">μ0</div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">I</div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">N</div>
                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">R</div>
                            
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">4</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">4π · 10<sup>-7</sup></div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">10<sup>2</sup></div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">i</div>

                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">3</div>
                             <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>-2</sup></div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">4π · 10<sup>-7</sup></div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>2</sup></div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">i</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador">
                           
                            <div class="constantes caracteres">4</div> 
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">3</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>-2</sup></div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                            <div class="equal">
                                <div class="constantes caracteres">i</div>
                                <div class="caracteres">=</div>
                            </div>
                            <div class="numerador"> 
                                <div class="constantes caracteres">24</div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">10<sup>-2</sup></div>
                            </div>
                            <div class="denominador"> 
                                <div class="constantes caracteres">4π · 10<sup>-5</sup></div>
                            </div>
                            
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">i</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres">24</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>-2</sup></div>
                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">12,56</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>-5</sup></div>
                        </div>
                        
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">i</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres">1,9</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>-2</sup></div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>5</sup></div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">i</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres">1,9</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>3</sup></div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                            <div class="equal">
                                <div class="constantes caracteres">i</div>
                                <div class="caracteres">=</div>
                            </div>
                            <div class="numerador"> 
                                <div class="constantes caracteres">1 900 A</div>
                            </div>
                    </div>
                </div>
            `
        },
        {
            statements:`
                <div class="param">
                    Um solenoide de <div class="zone wraper-values-quest"><div class="values-quest">20</div></div> m de comprimento contém <div class="zone wraper-values-quest"><div class="values-quest">1000</div></div> espiras e é percorrido por uma 
                    corrente elétrica de <div class="zone wraper-values-quest"><div class="values-quest">5.0</div></div> A. A permeabilidade absoluta do meio existente em seu interior é <div class="zone wraper-values-quest"><div class="values-quest">4π · 10<sup>-7</sup></div></div>, calcule o módulo do vetor
                    indução magnética criado pelo solenoide nessa região. 
                </div>
            `,
            inlustration:"../img/inlustrations/image-8.png",
            resolved: false,
            id:"08",
            resposta:"[250*μ0]",
            calculos:`

            `
        },
        {
            statements:`
                <div class="param">
                    Por um fio condutor passa uma corrente de intensidade igual a <div class="zone wraper-values-quest"><div class="values-quest">4.5</div></div> A, criando um campo 
                    magnético de certa magnitude em um ponto situado a <div class="zone wraper-values-quest"><div class="values-quest">200</div></div> m do fio. Considerando μo = <div class="zone wraper-values-quest"><div class="values-quest">4π · 10<sup>-7</sup></div></div> T · m/A , Calcule o valor do campo magnético produzido neste ponto. 
                </div>`,
            inlustration:"../img/inlustrations/image-9.png",
                resolved: false,
                id:"09",
            resposta: "[(9/800)*pi^(-1)*μ0]",
            calculos:`
                <div class="conteiner-calculos">
                    <div class="expresion formulas">
                        <div class="equal">
                                <div class="constantes caracteres">B</div>
                                <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">μ0</div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">I</div>
                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">π</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">R</div>
                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres">4π · 10<sup>-7</sup></div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres">4,5</div>
                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">π</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">200</div>

                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador">
                             
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">4,5</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>-7</sup></div>
                            
                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">2</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>2</sup></div>

                        </div>
                    </div>
                    <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador">
                             
                            <div class="constantes caracteres">9</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>-2</sup></div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>-7</sup></div>
                            
                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres">2</div>

                        </div>
                    </div>
                     <div class="expresion formulas">
                        <div class="equal">
                            <div class="constantes caracteres">B</div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador">
                            <div class="constantes caracteres">4,5</div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres">10<sup>-9</sup>T</div>
                            
                        </div>
                    </div>
                 </div>
            `
        },
        {
            statements:`
                <div class="param">
                    Uma espira circular com raio igual a <div class="zone wraper-values-quest"><div class="values-quest">0.02π</div></div> m é percorrida por uma corrente elétrica de 
                    <div class="zone wraper-values-quest"><div class="values-quest">4</div></div> A. (Considere o meio vácuo e a permeabilidade magnética μo= <div class="zone wraper-values-quest"><div class="values-quest">4π · 10<sup>-7</sup></div></div> T·m/A). Determine a intensidade do vetor campo magnético no centro da espira.
                </div>
            `,
            inlustration:"../img/inlustrations/image-10.png",
            resolved: false,
            id:"10",
            resposta:"[100*pi^(-1)*μ0]"
        },
        {
            statements:`
                <div class="param">
                    A <div class="zone wraper-values-quest"><div class="values-quest">0.4</div></div> m de um fio longo e retilíneo o campo magnético tem intensidade<div class="zone wraper-values-quest"><div class="values-quest">4 · 10<sup>-6</sup></div></div> T. O meio é 
                    o vácuo μo = <div class="zone wraper-values-quest"><div class="values-quest">4π · 10<sup>-7</sup></div></div> T · m/A. Qual é o valor da intensidade de corrente elétrica que percorre o fio? 
                </div>
            `,
            inlustration:"../img/inlustrations/image-11.png",
            resolved: false,
            id:"11",
            resposta:"[(7791252325665642/636150176594585)*μ0^(-1)]"
        },
        {
            statements:`
                <div class="param">
                    No interior de um solenóide de comprimento <div class="zone wraper-values-quest"><div class="values-quest">0.16</div></div>, registra-se um campo magnético de 
                    intensidade <div class="zone wraper-values-quest"><div class="values-quest">5π · 10<sup>-4</sup></div></div> T, quando ele é percorrido por uma corrente de <div class="zone wraper-values-quest"><div class="values-quest">8</div></div>A. Quantas espiras tem esse solenóide? Adote μo <div class="zone wraper-values-quest"><div class="values-quest">4π · 10<sup>-7</sup></div></div> T.m/A.
                </div>
            `,
            inlustration:"../img/inlustrations/image-12.png",
            resolved: false,
            id:"12",
            resposta:"[(367257403/75921450)*μ0^(-1)]"
        }
                                 
   ]

   let profiles = JSON.parse(localStorage.getItem("profiles") || "[]") 
   let currentProfileName = localStorage.getItem("current-profile")


   let  currentProfile =  profiles.find(el => el.userName == currentProfileName)


   const quests = document.querySelectorAll(".btn-quest")
   
   let resolve = null
   quests.forEach((quest)=>{

        currentProfile.data.forEach((obj) =>{ 
            if (obj.id == quest.querySelector(".number-quest").textContent.trim() ) {
                resolve = obj.resolved
                return
            }
            
            
        })
        console.log(resolve)
        if (resolve) {
            
            quest.classList.add("is-conclued")
            
        }
        quest.addEventListener("click",()=>{

            localStorage.setItem("quest-number", quest.querySelector(".number-quest").textContent) 
             
        })
   })

   return db
}