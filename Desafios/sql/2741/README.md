# 2741 - Notas dos Alunos

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2741)

## Solução

Notas dos Alunos [2741 - Notas dos Alunos](../2741/README.md).

```sql
select
    ('Approved: ' || name) as name,
    grade
  from
    students
 where
    grade >= 7
order by grade desc
```
