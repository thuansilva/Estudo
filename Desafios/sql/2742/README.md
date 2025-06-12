# 2742 - O Multiverso de Richard

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2742)

## Solução

O Multiverso de Richard [2742 - O Multiverso de Richard](../2742/README.md).

```sql
select
    l.name as name,
    round(l.omega * 1.618,3) as  "Fator N"
from
    dimensions d
    join life_registry l on d.id = l.dimensions_id
where
    d.name in ('C875', 'C774')
    and l.name like 'Richard %'
order by l.omega asc

```
