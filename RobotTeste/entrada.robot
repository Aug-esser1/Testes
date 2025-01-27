*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Scenario 1: criar entrada
    entrar no site
    click Nova transação
    preencha os campos
    click em salvar
    verificar corretamente
    fechar navegador

*** Variables ***
${url}            https://dev-finance.netlify.app/#
${btn_nv_trns}    //*[@id="transaction"]/a

${descricao}    //input[@id="description"]
${valor}        //input[@id="amount"]
${data}         //input[@id="date"]
${vl_desc}      Freela
${vl_valor}     100
${vl_data}      2024-09-10

${btn_salvar}   //*[@id="form"]/form/div[4]/button

*** Keywords ***
entrar no site
    Open Browser    ${url}    chrome
    Maximize Browser Window

click Nova transação
    Wait Until Element Is Visible    ${btn_nv_trns}    20s
    Click Element    ${btn_nv_trns}

preencha os campos
    Input Text    ${descricao}    ${vl_desc}
    Input Text    ${valor}        ${vl_valor}
    Input Text    ${data}         ${vl_data}
    #yyyy-mm-dd

click em salvar
    Click Element    ${btn_salvar}

verificar corretamente
    Element Should Be Visible   //*[@id="data-table"]/tbody/tr/td[text()="${vl_desc}"]
    
fechar navegador
    Close Browser