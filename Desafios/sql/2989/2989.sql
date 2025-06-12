SELECT 
    d.nome AS departamento,
    dv.nome AS divisao,
    ROUND(COALESCE(AVG(v.valor), 0), 2) AS media,
    ROUND(COALESCE(MAX(v.valor), 0), 2) AS maior
FROM 
    departamento d
JOIN 
    divisao dv ON d.cod_dep = dv.cod_dep
JOIN 
    empregado e ON dv.cod_divisao = e.lotacao_div
JOIN 
    emp_venc ev ON e.matr = ev.matr
JOIN 
    vencimento v ON ev.cod_venc = v.cod_venc
ORDER BY 
    media DESC;
