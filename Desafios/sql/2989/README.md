# 2989 - Departamentos e Divisões

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2989)

## Solução

Departamentos e Divisões [2989 - Departamentos e Divisões](../2989/README.md).

```sql
select
    t.name,
    count(*) as matches
from
    matches m
    join teams t on t.id in (m.team_1, m.team2)
group by
    t.name

union all

select
    table.victories as victories,
    table.defeats as defeats,
    table.draws as drews,
    sum(table.victories*3 + table.draws)
from (

    select
        t.name as name,
        count(*) as victories,
    from matches m
        join teams t on t.id in (m.team_1, m.team2)
    where
        (t.id = m.team_1 AND m.team_1_goals > m.team_2_goals)
        OR
        (t.id = m.team_2 AND m.team_2_goals > m.team_1_goals)
    group by t.name

    union all

    select
        t.name as name,
        count(*) as defeat
    from matches m
        join teams t on t.id in (m.team_1, m.team2)
    where
        (t.id = m.team_1 AND m.team_2_goals > m.team_1_goals)
        OR
        (t.id = m.team_2 AND m.team_1_goals > m.team_2_goals)
    group by t.name

    union all

     select
        t.name as name,
        count(*) as draws
    from matches m
        join teams t on t.id in (m.team_1, m.team2)
    where
        (t.id = m.team_1 AND m.team_1_goals = m.team_2_goals)
        OR
        (t.id = m.team_2 AND m.team_2_goals = m.team_1_goals)
    group by t.name
) as table



```
