# 2614 - Locações de Setembro

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2614)

## Solução

Locações de Setembro [2614 - Locações de Setembro](../2614/README.md).

```sql
SELECT
    c.name AS name,
    r.rentals_date AS rentals_date
FROM
    rentals r
    JOIN customers c
    ON r.id_customers = c.id
WHERE
    r.rentals_date between '2016-09-01' and '2016-09-30';
```
