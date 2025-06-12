SELECT 
    t.name AS team_name,
    COUNT(m.id) AS matches,
    COALESCE(SUM(CASE 
        WHEN (m.team_1 = t.id AND m.team_1_goals > m.team_2_goals) OR (m.team_2 = t.id AND m.team_2_goals > m.team_1_goals) THEN 1 
        ELSE 0 
    END), 0) AS victories,
    COALESCE(SUM(CASE 
        WHEN (m.team_1 = t.id AND m.team_1_goals < m.team_2_goals) OR (m.team_2 = t.id AND m.team_2_goals < m.team_1_goals) THEN 1 
        ELSE 0 
    END), 0) AS defeats,
    COALESCE(SUM(CASE 
        WHEN m.team_1_goals = m.team_2_goals THEN 1 
        ELSE 0 
    END), 0) AS draws,
    COALESCE(SUM(CASE 
        WHEN (m.team_1 = t.id AND m.team_1_goals > m.team_2_goals) OR (m.team_2 = t.id AND m.team_2_goals > m.team_1_goals) THEN 3
        WHEN m.team_1_goals = m.team_2_goals THEN 1
        ELSE 0
    END), 0) AS points
FROM teams t
LEFT JOIN matches m ON m.team_1 = t.id OR m.team_2 = t.id
GROUP BY t.name
ORDER BY points DESC;





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
