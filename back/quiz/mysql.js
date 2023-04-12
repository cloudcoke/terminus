const sqlQuiz = [
    {
        command: "show",
        prompt: `데이터 베이스, 테이블 등을 표시하는 명령어 입니다.`,
        exam: "hello 데이터 베이스의 모든 테이블을 표시해 보세요. [소문자로 작성해 주세요.]",
        answer: "show tables from hello;",
        setting: "",
        hint: "",
        difficulty: "easy",
        category: "sql",
    },
    {
        command: "use",
        prompt: `데이터 베이스를 선택하는 데 사용하는 명령어 입니다. 
    use 명령어를 사용해 데이터 베이스를 선택한 후에는 use 명령어를 사용하여 다른 데이터 베이스를 선택할 때까지 실행하는 모든 명령이 선택한 데이터 베이스에 적용됩니다.`,
        exam: "hello 데이터 베이스를 선택해 보세요. [소문자로 작성해 주세요.]",
        answer: "use hello;",
        setting: "",
        hint: "",
        difficulty: "easy",
        category: "sql",
    },
    {
        command: "create",
        prompt: `데이터 베이스 또는 테이블을 생성하는 명령어 입니다.`,
        exam: "first_db라는 이름을 가진 데이터 베이스를 생성해 보세요. [소문자로 작성해 주세요.]",
        answer: "create database first_db;",
        setting: "",
        hint: "",
        difficulty: "easy",
        category: "sql",
    },
    {
        command: "desc",
        prompt: `테이블 구조나 스키마를 표시하는 데 사용하는 명령어 입니다.`,
        exam: "use 명령어를 사용해 hello database를 선택한 다음 desc 명령어를 사용해 world 테이블의 구조를 확인해 보세요. [소문자로 작성해 주세요.] ",
        answer: "desc world;",
        setting: "",
        hint: "",
        difficulty: "easy",
        category: "sql",
    },
    {
        command: "drop",
        prompt: `데이터 베이스, 테이블, 뷰, 인덱스 등을 삭제하는 데 사용하는 명령어 입니다.`,
        exam: "drop 명령어를 사용해 dropship 데이터 베이스를 삭제해 보세요. [소문자로 작성해 주세요.]",
        answer: "drop database dropship;",
        setting: "",
        hint: "",
        difficulty: "easy",
        category: "sql",
    },
    {
        command: "insert",
        prompt: `새로운 데이터 행을 테이블에 삽입하는 데 사용하는 명령어 입니다.`,
        exam: "insert 명령어를 사용해서 my_table에 name은 pepsi, age는 125, email은 pepsi.sns@gmail.com인 행을 삽입해 주세요. [소문자로 작성해 주세요.]",
        answer: "insert into my_table(name, age, email) values ('pepsi', 125, 'pepsi.sns@gmail.com');",
        setting: "",
        hint: "",
        difficulty: "middle",
        category: "sql",
    },
    {
        command: "select",
        prompt: `데이터 베이스의 하나 이상의 테이블에서 데이터를 검색하는 데 사용하는 명령어 입니다.`,
        exam: "my_table에 대한 모든 필드와 레코드를 * 기호를 사용해 확인해 보세요. [소문자로 작성해 주세요.]",
        answer: "select * from my_table;",
        setting: "",
        hint: "",
        difficulty: "middle",
        category: "sql",
    },
    {
        command: "where",
        prompt: `select 명령어 함께 사용하면 지정된 조건에 따라 쿼리에서 반환된 결과를 필터링 하는 명령어 입니다.`,
        exam: "select 명령어와 where 명령어를 함께 사용하여 my_table 테이블에서 name이 pepsi인 행을 모두 출력해 보세요. [소문자로 작성해 주세요.]",
        answer: "select * from my_table where name='pepsi';",
        setting: "",
        hint: "",
        difficulty: "middle",
        category: "sql",
    },
    {
        command: "order by",
        prompt: `쿼리 결과를 하나 이상의 열을 기준으로 오름차순 또는 내림차순으로 정렬하는 데 사용하는 명령어 입니다.`,
        exam: "my_table 테이블을 age 필드를 기준으로 내림차순으로 정렬해 보세요. [소문자로 작성해 주세요.]",
        answer: "select * from my_table order by age desc;",
        setting: "",
        hint: "",
        difficulty: "middle",
        category: "sql",
    },
    {
        command: "like",
        prompt: `select 명령어와 where 명령어와 함께 사용하여 지정된 패턴을 기반으로 결과를 필터링 하는 명령어 입니다. 문자열 값을 패턴과 비교하고 문자열이 패턴과 일치하면 true를 반환합니다.`,
        exam: "my_table 테이블에서 email이 gmail.com으로 끝나는 email들을 모두 출력해 보세요. [소문자로 작성해 주세요.]",
        answer: "select * from my_table where email like '%gmail.com';",
        setting: "",
        hint: "",
        difficulty: "middle",
        category: "sql",
    },
    {
        command: "update",
        prompt: `테이블의 기존 데이터를 수정하는 데 사용하는 명령어 입니다.`,
        exam: "update where 절만 사용해서 my_table 테이블에서 name이 cloudcoke인 레코드를 cloudcider로 변경해 보세요. ",
        answer: "update my_table set name='cloudcider' where name='cloudcoke';",
        setting: "",
        hint: "",
        difficulty: "middle",
        category: "sql",
    },
    {
        command: "alter",
        prompt: `열 추가 또는 삭제, 열의 데이터 유형 변경 또는 테이블 이름 변경과 같은 테이블 구조를 수정하는 데 사용하는 명령어 입니다.
    alter table table_name [add|modify|drop|change] column column_name data_type;
    alter table table name [rename] new_table_name;`,
        exam: "world 테이블의 이름을 welcome으로 변경해 주세요. [소문자로 작성해 주세요.]",
        answer: "alter table world rename to welcome;",
        setting: "",
        hint: "",
        difficulty: "middle",
        category: "sql",
    },
    {
        command: "delete",
        prompt: `테이블에서 하나 이상의 데이터 행을 제거하는 데 사용하는 명령어 입니다. 주로 where 절에 조건을 걸어 삭제할 행을 선택합니다. where 절을 생략하면 테이블의 모든 행이 삭제됩니다.`,
        exam: "my_table 테이블에서 name이 pepsi인 행을 delete와 where절만 사용해 제거해 주세요. [소문자로 작성해 주세요.]",
        answer: "delete from my_table where name='pepsi'",
        setting: "",
        hint: "",
        difficulty: "middle",
        category: "sql",
    },
    {
        command: "join(inner join)",
        prompt: `두 개 이상의 테이블 사이의 공통 열을 기반으로 데이터를 결합하는 데 사용하는 명령어 입니다. inner join은 두 테이블에서 일치하는 행만 반환합니다.`,
        exam: `각 주문에 대한 고객의 이름과 주문 합계를 검색해 보세요. [소문자로 작성해 주세요.]\n
    mysql> select * from orders;\n
    +----------+-------------+------------+--------+\n
    | order_id | customer_id | order_date | total  |\n
    +----------+-------------+------------+--------+\n
    |        1 |         101 | 2021-01-01 |  50.00 |\n
    |        2 |         102 | 2021-01-02 |  75.00 |\n
    |        3 |         101 | 2021-01-03 |  25.00 |\n
    |        4 |         103 | 2021-01-04 | 100.00 |\n
    |        5 |         101 | 2021-01-05 |  35.00 |\n
    +----------+-------------+------------+--------+\n
\n
    mysql> select * from customers;\n
    +-------------+------------+-----------+-------------------------+\n
    | customer_id | first_name | last_name | email                   |\n
    +-------------+------------+-----------+-------------------------+\n
    |         101 | John       | Smith     | john.smith@example.com  |\n
    |         102 | Jane       | Doe       | jane.doe@example.com    |\n
    |         103 | Bob        | Johnson   | bob.johnson@example.com |\n
    +-------------+------------+-----------+-------------------------+\n`,
        answer: "select customers.first_name, customers.last_name, orders.total from customers inner join orders on customers.customer_id = orders.customer_id;",
        setting: "",
        hint: "",
        difficulty: "hard",
        category: "sql",
    },
    {
        command: "left join",
        prompt: `왼쪽 테이블의 모든 행과 오른쪽 테이블의 일치하는 행을 반환하거나 오른쪽 테이블의 일치하지 않는 행에 대해 null 값을 반환합니다.`,
        exam: `주문하지 않은 고객을 포함하여 각 주문에 대한 고객 이름과 주문 합계를 검색해 보세요. [소문자로 작성해 주세요.]
    mysql> select * from orders;
    +----------+-------------+------------+--------+
    | order_id | customer_id | order_date | total  |
    +----------+-------------+------------+--------+
    |        1 |         101 | 2021-01-01 |  50.00 |
    |        2 |         102 | 2021-01-02 |  75.00 |
    |        3 |         101 | 2021-01-03 |  25.00 |
    |        4 |         103 | 2021-01-04 | 100.00 |
    |        5 |         101 | 2021-01-05 |  35.00 |
    +----------+-------------+------------+--------+

    mysql> select * from customers;
    +-------------+------------+-----------+-------------------------+
    | customer_id | first_name | last_name | email                   |
    +-------------+------------+-----------+-------------------------+
    |         101 | John       | Smith     | john.smith@example.com  |
    |         102 | Jane       | Doe       | jane.doe@example.com    |
    |         103 | Bob        | Johnson   | bob.johnson@example.com |
    +-------------+------------+-----------+-------------------------+`,
        answer: "select customers.first_name, customers.last_name, orders.total from customers left join orders on customers.customer_id = orders.customer_id;",
        setting: "",
        hint: "",
        difficulty: "hard",
        category: "sql",
    },
    {
        command: "right join",
        prompt: `오른쪽 테이블의 모든 행과 왼쪽 테이블의 일치하는 행을 반환하거나 왼쪽 테이블의 일치하지 않는 행에 대해 null 값을 반환합니다.`,
        exam: `고객 정보가 누락된 주문을 포함하여 각 주문에 대한 주문 id와 주문 날짜를 검색해 보세요. [소문자로 작성해 주세요.]
    sql> select * from orders;
    +----------+-------------+------------+--------+
    | order_id | customer_id | order_date | total  |
    +----------+-------------+------------+--------+
    |        1 |         101 | 2021-01-01 |  50.00 |
    |        2 |         102 | 2021-01-02 |  75.00 |
    |        3 |         101 | 2021-01-03 |  25.00 |
    |        4 |         103 | 2021-01-04 | 100.00 |
    |        5 |         101 | 2021-01-05 |  35.00 |
    +----------+-------------+------------+--------+

    sql> select * from customers;
    +-------------+------------+-----------+-------------------------+
    | customer_id | first_name | last_name | email                   |
    +-------------+------------+-----------+-------------------------+
    |         101 | John       | Smith     | john.smith@example.com  |
    |         102 | Jane       | Doe       | jane.doe@example.com    |
    |         103 | Bob        | Johnson   | bob.johnson@example.com |
    +-------------+------------+-----------+-------------------------+`,
        answer: "select orders.order_id, orders.order_date, customers.first_name, customers.last_name from customers right join orders on customers.customer_id = orders.customer_id;",
        setting: "",
        hint: "",
        difficulty: "hard",
        category: "sql",
    },
];

module.exports = { sqlQuiz };

