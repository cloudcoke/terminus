const sqlOptions = [
  {
    command: "show",
    prompt: "모든 데이터 베이스 표시",
    optioncommand: "show database;",
  },
  {
    command: "show",
    prompt: "데이터베이스의 모든 테이블 확인",
    optioncommand: "show tables from my_dabase;",
  },
  {
    command: "use",
    prompt: "my_db 선택",
    optioncommand: "use my_db;",
  },
  {
    command: "create",
    prompt: "데이터 베이스 생성",
    optioncommand: "create database my_database;",
  },
  {
    command: "create",
    prompt: "테이블 생성",
    optioncommand: `create table my_table (id int auto_increment primary key, name varchar(30), age int, email varchar(50));`,
  },
  {
    command: "desc",
    prompt: "테이블 구조 확인",
    optioncommand: "desc hello;",
  },
  {
    command: "drop",
    prompt: "데이터 베이스 삭제",
    optioncommand: "drop database my_db;",
  },
  {
    command: "drop",
    prompt: "테이블 삭제",
    optioncommand: "drop table my_table;",
  },
  {
    command: "insert",
    prompt: "데이터 테이블에 삽입",
    optioncommand: "insert into my_table (name, age, email) values ('cloudcoke', 27, 'cloudcoke.dev@gmail.com');",
  },
  {
    command: "select",
    prompt: "my_table에서 name과 age 검색",
    optioncommand: "select name, age from my_table;",
  },
  {
    command: "select",
    prompt: "my_table에서 모두 검색",
    optioncommand: "select * from my_table;",
  },
  {
    command: "where",
    prompt: "name이 cloudcoke인 레코드 검색",
    optioncommand: "select name, age from my_table where name='cloudcoke';",
  },
  {
    command: "order by",
    prompt: "오름차순 정렬",
    optioncommand: "select * from my_table order by age asc;",
  },
  {
    command: "order by",
    prompt: "내림차순 정렬",
    optioncommand: "select name, age from my_table order by age desc;",
  },
  {
    command: "like",
    prompt: "name 필드에 cloud라는 문자열이 포함되는 데이터 출력",
    optioncommand: "select * from my_table where name like '%cloud%';",
  },
  {
    command: "like",
    prompt: "name 필드에 cloud라는 문자열로 시작되는 데이터 출력",
    optioncommand: "select * from my_table where name like 'cloud%';",
  },
  {
    command: "like",
    prompt: "name 필드에 coke라는 문자열로 끝나는 데이터 출력",
    optioncommand: "select * from my_table where name like '%coke';",
  },
  {
    command: "like",
    prompt: "name 필드에 p로 시작하고 i로 끝나는 5글자 문자열이 있는 데이터 출력",
    optioncommand: "select * from my_table where name like 'p___i';",
  },
  {
    command: "update",
    prompt: "my_table의 email 변경",
    optioncommand: "update my_table set email='pepsi@gmail.com' where email like '%pepsi%';",
  },
  {
    command: "alter",
    prompt: "column 추가",
    optioncommand: "alter table my_table add column level enum('easy', 'middle', 'hard') default 'easy';",
  },
  {
    command: "alter",
    prompt: "column 데이터 유형 변경",
    optioncommand: "alter table my_table modify column level int;",
  },
  {
    command: "alter",
    prompt: "column 삭제",
    optioncommand: "alter table my_table drop column level;",
  },
  {
    command: "alter",
    prompt: "column 이름 변경 및 데이터 유형 변경",
    optioncommand: "alter table my_table change column name nickname varchar(50);",
  },
  {
    command: "alter",
    prompt: "테이블 이름 변경",
    optioncommand: "alter table my_table rename to hello_table;",
  },
  {
    command: "delete",
    prompt: "name이 cloudcider인 레코드 삭제",
    optioncommand: "delete from my_table where name='cloudcider'",
  },
  {
    command: "join(inner join)",
    prompt: "orders의 customer_id 필드와 customers의 customer_id 필드에서 일치하는 행만 반환합니다.",
    optioncommand:
      "select orders.order_id, orders.order_date, customers.first_name, customers.last_name from orders inner join customers on orders.customer_id = customers.customer_id;",
  },
  {
    command: "left join",
    prompt:
      "customers의 customer_id 필드와 orders의 customer_id 필드에서 일치하는 행을 반환하거나 customers에 일치하지 않는 행에 대해 null 값을 반환합니다.",
    optioncommand:
      "select customers.customer_id, customers.first_name, customers.last_name, orders.order_id,  orders.order_date, orders.total from customers left join orders on customers.customer_id = orders.customer_id;",
  },
  {
    command: "right join",
    prompt:
      "customers의 customer_id 필드와 orders의 customer_id 필드에서 일치하는 행을 반환하거나 orders의 일치하지 않는 행에 대해 null 값을 반환합니다.",
    optioncommand:
      "select orders.order_id, orders.order_date, customers.first_name, customers.last_name from customers right join orders on customers.customer_id = orders.customer_id;",
  },
]

module.exports = { sqlOptions }
