const options = [
  {
    command: "ls",
    prompt: "현재 디렉터리의 목록(숨김 파일 포함)을 표시합니다.",
    optioncommand: "ls -a",
  },
  {
    command: "ls",
    prompt: "현재 디렉터리의 목록을 자세히 표시합니다.",
    optioncommand: "ls -l",
  },
  {
    command: "cd",
    prompt: "현재 작업 디렉터리를 현재 사용자의 홈 디렉터로 변경합니다.",
    optioncommand: "cd ~",
  },
  {
    command: "cd",
    prompt: "현재 작업 디렉터리를 현재 디렉터리의 상위 디렉터리로 변경합니다.",
    optioncommand: "cd ..",
  },
  {
    command: "cd",
    prompt: "현재 작업 디렉터리를 지정한 디렉터리로 변경합니다.",
    optioncommand: "cd [/path/to/dir]",
  },
  {
    command: "rm",
    prompt: "지정한 디렉터리와 하위 디렉터리 및 파일들까지 제거합니다.",
    optioncommand: "rm -r [dir]",
  },
  {
    command: "rm",
    prompt: "확인 메시지를 표시하지 않고 지정된 파일이나 디렉터리를 강제로 제거합니다.",
    optioncommand: "rm -f [dir|filename]",
  },
  {
    command: "rm",
    prompt: "지정된 파일 또는 디렉터리를 제거하기 전에 사용자에게 확인 메시지를 표시합니다.",
    optioncommand: "rm -i [dir|filename]",
  },
  {
    command: "cp",
    prompt: "recursive 디렉터리 안의 내용을 모두 target 디렉터리에 모두 복사합니다.",
    optioncommand: "cp -r [recursive] [target]",
  },
  {
    command: "touch",
    prompt: "파일이 없으면 빈 파일을 만들고 파일이 있으면 수정 시간만 업데이트 합니다. [확인 stat filename]",
    optioncommand: "touch -c [filename]",
  },
  {
    command: "touch",
    prompt: "지정된 파일의 수정 시간만 업데이트 합니다.",
    optioncommand: "touch -m [filename]",
  },
  {
    command: "touch",
    prompt: "지정된 파일의 액세스 시간만 업데이트 합니다.",
    optioncommand: "touch -a [filename]",
  },
  {
    command: "mv",
    prompt: "기존 파일을 덮어쓰기 전에 사용자에게 확인 메시지를 표시합니다.",
    optioncommand: "mv -i [filename] [/path/to/dir]",
  },
  {
    command: "mv",
    prompt: "확인 메시지를 표시하지 않고 지정된 파일을 지정된 디렉터리로 강제 이동합니다.",
    optioncommand: "mv -f [filename] [/path/to/dir]",
  },
  {
    command: "mkdir",
    prompt: "지정한 디렉터리의 상위 디렉터리가 존재하지 않는다면 상위 디렉터리를 생성하면서 지정한 디렉터리 생성",
    optioncommand: "mkdir -p [/path/to/dir]",
  },
  {
    command: "cat",
    prompt: "지정된 파일의 내용을 줄 번호와 함께 표시합니다.",
    optioncommand: "cat -n [filename]",
  },
  {
    command: "cat",
    prompt: "지정된 파일의 내용을 공백 없이 줄 번호와 함께 표시합니다.",
    optioncommand: "cat -b [filename]",
  },
  {
    command: "head",
    prompt: "지정된 파일의 내용을 맨 처음 줄부터 n 번째 줄까지 표시합니다.",
    optioncommand: "head -n [num] [filename]",
  },
  {
    command: "tail",
    prompt: "지정된 파일의 내용을 만 마지막 줄부터 n 번째 줄까지 표시합니다.",
    optioncommand: "tail -n [num] [filename]",
  },
  {
    command: "tail",
    prompt: "지정된 파일의 마지막 몇줄을 계속 표시하고 파일에 새 줄이 추가되면 디스플레이를 업데이트 합니다.",
    optioncommand: "tail -f [filename]",
  },
  {
    command: "cal",
    prompt: "지정된 월과 연도의 달력을 표시합니다.",
    optioncommand: "cal [month] [year]",
  },
  {
    command: "uname",
    prompt: "운영 체제, 호스트 이름, 커널 버전 및 하드웨어 아키텍처를 포함한 모든 시스템 정보를 표시합니다.",
    optioncommand: "uname -a",
  },
  {
    command: "uname",
    prompt: "운영 체제의 이름을 표시합니다.",
    optioncommand: "uname -s",
  },
  {
    command: "uname",
    prompt: "커널 릴리즈 버전을 표시합니다.",
    optioncommand: "uname -r",
  },
  {
    command: "wc",
    prompt: "지정된 파일의 행 수만 표시합니다.",
    optioncommand: "wc -l [filename]",
  },
  {
    command: "wc",
    prompt: "지정된 파일의 단어 수만 표시합니다.",
    optioncommand: "wc -w [filename]",
  },
  {
    command: "wc",
    prompt: "지정된 파일의 바이트 수만 표시합니다.",
    optioncommand: "wc -c [filename]",
  },
  {
    command: "wc",
    prompt: "지정된 파일의 문자 수만 표시합니다.",
    optioncommand: "wc -m [filename]",
  },
  {
    command: "uptime",
    prompt: "사람이 읽을 수 있는 형식으로 시스템 가동 시간을 표시합니다.",
    optioncommand: "uptime -p",
  },
  {
    command: "echo",
    prompt: "지정된 텍스트의 백슬래시 이스케이프 문자를 해석합니다.",
    optioncommand: "echo -e ['text']",
  },
  {
    command: "grep",
    prompt: "지정된 디렉터리 및 하위 디렉터리 내의 모든 파일에서 지정된 텍스트 패턴을 검색합니다.",
    optioncommand: "grep -r ['pattern'] [dir]",
  },
  {
    command: "grep",
    prompt: "대소문자를 무시하고 지정된 파일에서 지정된 텍스트 패턴을 검색합니다.",
    optioncommand: "grep -i ['pattern'] [filename]",
  },
  {
    command: "grep",
    prompt: "지정된 파일에서 지정된 텍스트 패턴을 검색하여 패턴이 발견된 행 번호를 표시합니다.",
    optioncommand: "grep -n ['pattern'] [filename]",
  },
  {
    command: "egrep",
    prompt:
      "확장된 정규 표현식을 사용하여 지정된 디렉터리 및 하위 디렉터리 내의 모든 파일에서 지정된 텍스트 패턴을 검색합니다.",
    optioncommand: "egrep -r ['pattern'] [dir]",
  },
  {
    command: "egrep",
    prompt: "대소문자를 무시하고 확장된 정규 표현식을 사용하여 지정된 파일에서 지정된 텍스트 패턴을 검색합니다.",
    optioncommand: "egrep -i ['pattern'] [filename]",
  },
  {
    command: "egrep",
    prompt:
      "확장된 정규 표현식을 사용하여 지정된 파일에서 지정된 텍스트 패턴을 검색하고 패턴이 발견된 라인 번호를 표시합니다.",
    optioncommand: "egrep -n ['pattern'] [filename]",
  },
  {
    command: "fgrep",
    prompt: "지정된 디렉터리 및 하위 디렉터리 내의 모든 파일에서 지정된 문자열을 검색합니다.",
    optioncommand: "fgrep -r ['string'] [dir]",
  },
  {
    command: "fgrep",
    prompt: "대소문자를 무시하고 지정된 파일에서 지정된 고정 문자열 검색합니다.",
    optioncommand: "fgrep -i ['string'] [filename]",
  },
  {
    command: "fgrep",
    prompt: "지정된 파일에서 지정된 고정 문자열을 검색하여 문자열이 발견된 줄 번호를 표시합니다.",
    optioncommand: "fgrep -n ['string'] [filename]",
  },
  {
    command: "find",
    prompt: "지정된 디렉터리 내에서 지정된 이름을 가진 파일 또는 디렉터리를 검색합니다.",
    optioncommand: "find [/path/to/dir] -name [filename]",
  },
  {
    command: "find",
    prompt: "지정된 디렉터리 내에서 파일 또는 디렉터리를 검색합니다.",
    optioncommand: "find [/path/to/dir] -type [f:file|d:dir]",
  },
  {
    command: "find",
    prompt: "지정된 디렉터리 내에서 찾은 각 파일 또는 디렉터리에서 지정된 명령을 실행합니다.",
    optioncommand: "find [/path/to/dir] -exec [command] {}",
  },
  {
    command: "compress",
    prompt: "압축되는 파일의 압축률을 표시합니다.",
    optioncommand: "compress -v [filename]",
  },
  {
    command: "compress",
    prompt: "지정된 디렉터리 및 하위 디렉터리의 모든 파일을 압축합니다.",
    optioncommand: "compress -r [dir]",
  },
  {
    command: "uncompress",
    prompt: "자세한 내용을 표시하면서 압축을 해제합니다.",
    optioncommand: "uncompress -v [.Z file]",
  },
  {
    command: "gzip",
    prompt: "지정된 디렉터리 및 하위 디렉터리의 모든 파일을 압축합니다.",
    optioncommand: "gzip -r [dir]",
  },
  {
    command: "gzip",
    prompt: "압축되는 파일의 압축률을 표시합니다.",
    optioncommand: "gzip -v [filename]",
  },
  {
    command: "bzip2",
    prompt: "지정된 디렉터리 및 하위 디렉터리의 모든 파일을 압축합니다.",
    optioncommand: "bzip2 -r [dir]",
  },
  {
    command: "bzip2",
    prompt: "압축되는 파일의 압축률을 표시합니다.",
    optioncommand: "bzip2 -v [filename]",
  },
  {
    command: "tar",
    prompt: "지정된 파일 및 디렉터리를 포함하는 new.tar라는 이름의 새 tar 아카이브를 생성합니다.",
    optioncommand: "tar -cvf new.tar [file1] [file2] [dir]",
  },
  {
    command: "tar",
    prompt: "지정된 파일 및 디렉터리를 포함하는 new.tar라는 이름의 새 tar 아카이브를 생성하고 gzip으로 압축합니다.",
    optioncommand: "tar -zcvf new.tar [file1] [file2] [dir]",
  },
  {
    command: "tar",
    prompt: "지정된 파일 및 디렉터리를 포함하는 new.tar라는 이름의 새 tar 아카이브를 생성하고 bzip2로 압축합니다.",
    optioncommand: "tar -jcvf new.tar [file1] [file2] [dir]",
  },
  {
    command: "tar",
    prompt: "압축된 tar 아카이브에서 파일 및 디렉터리를 추출합니다.",
    optioncommand: "tar -xvf new.tar.[gzip|bzip2]",
  },
  {
    command: "ln",
    prompt: "file1을 가리키는 link1이라는 심볼릭 링크를 만듭니다.",
    optioncommand: "ln -s fiel1 link1",
  },
  {
    command: "sed",
    prompt: "지정된 파일에서 oldstring의 항목을 newstring으로 바꿔서 출력합니다.",
    optioncommand: "sed 's/oldstring/newstring/g'",
  },
  {
    command: "sed",
    prompt: "지정된 파일에서 oldstring의 모든 항목을 newstring으로 바꾸고 변경 사항을 파일에 저장합니다.",
    optioncommand: "sed -i 's/oldstring/newstring/g' [filename]",
  },
  {
    command: "sed",
    prompt: "지정된 파일에서 1~5행을 삭제합니다.",
    optioncommand: "sed '1,5d' [filename]",
  },
  {
    command: "sed",
    prompt: "지정된 파일의 1~5행을 표시합니다.",
    optioncommand: "sed '1,5p' [filename]",
  },
  {
    command: "awk",
    prompt: "지정된 파일에서 지정된 패턴과 일치하는 줄을 검색하고 출력합니다.",
    optioncommand: "awk '/pattern/{print $0}' [filename]",
  },
  {
    command: "awk",
    prompt: "지정된 파일에서 각 줄의 첫 번째 및 두 번째 필드를 출력합니다.",
    optioncommand: "awk '{print $1, $2}' [filename]",
  },
  {
    command: "awk",
    prompt: "지정된 파일의 각 행에 있는 필드 수를 출력합니다.",
    optioncommand: "awk '{print NF}' [filename]",
  },
  {
    command: "awk",
    prompt: "지정된 파일의 각 행의 첫번째 필드의 합계를 계산하고 합계를 출력합니다.",
    optioncommand: "awk '{sum += $1} END {print sum}' [filename]",
  },
  {
    command: "awk",
    prompt: "필드 구분 기호로 ':'을 사용하고 지정된 파일에서 각 줄의 첫 번째 필드를 출력합니다.",
    optioncommand: "awk -F':' '{print $1}' [filename]",
  },
  {
    command: "chmod",
    prompt:
      "지정된 파일의 소유자에 대한 권한을 읽기, 쓰기, 실행으로 그룹 및 기타 사용자에 대한 권한을 읽기, 실행으로 설정합니다.",
    optioncommand: "chmod 755 [filename]",
  },
  {
    command: "chmod",
    prompt:
      "지정된 파일의 소유자에 대한 권한에 읽기 권한을 추가하고 그룹에 대한 권한에 쓰기 권한을 제거하고 기타 사용자에 대한 권한에 실행 권한을 제거합니다.",
    optioncommand: "chmod u+r,g-w,o-x [filename]",
  },
]

module.exports = { options }
