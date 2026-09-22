export default interface CasosDeUso<ENTRADA,SAIDA>{

    executar(entrada: ENTRADA) : Promise<SAIDA>
}