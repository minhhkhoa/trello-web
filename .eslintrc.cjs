// Updated by trungquandev.com's author on May 13 2023
// Sample Eslint config for React project
module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh'
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 0,
    'react/display-name': 0,

    'no-console': 1,
    'no-lonely-if': 1,
    'no-unused-vars': 1,
    'no-trailing-spaces': 1,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': 1,
    'space-before-blocks': ['error', 'always'],
    'object-curly-spacing': [1, 'always'],
    'indent': ['warn', 2],
    'semi': [1, 'never'],
    'quotes': ['error', 'single'],
    'array-bracket-spacing': 1,
    'linebreak-style': 0,
    'no-unexpected-multiline': 'warn',
    'keyword-spacing': 1,
    'comma-dangle': 1,
    'comma-spacing': 1,
    'arrow-spacing': 1
  }
}

// Quy tắc liên quan đến React và React Hooks
// 1.'react-refresh/only-export-components': 'warn'
// Cảnh báo nếu bạn xuất bất cứ thứ gì không phải là một component từ module.

// 2.'react-hooks/rules-of-hooks': 'error'
// Báo lỗi nếu bạn không tuân theo các quy tắc của React Hooks(ví dụ: chỉ sử dụng hooks trong function components hoặc custom hooks).

// 3.'react-hooks/exhaustive-deps': 'warn'
// Cảnh báo nếu dependencies của hook(useEffect, useCallback, useMemo) không đầy đủ.

// 4.'react/prop-types': 0
// Vô hiệu hóa kiểm tra PropTypes.

// 5.'react/display-name': 0
// Vô hiệu hóa kiểm tra tên hiển thị của component.

// Quy tắc chung
// 1.'no-console': 1
// Cảnh báo nếu có sử dụng console.log.

// 2.'no-lonely-if': 1
// Cảnh báo nếu có sử dụng if trong else mà không có code bên trong else.

// 3.'no-unused-vars': 1
// Cảnh báo nếu có biến khai báo nhưng không được sử dụng.

// 4.'no-trailing-spaces': 1
// Cảnh báo nếu có khoảng trắng thừa ở cuối dòng.

// 5.'no-multi-spaces': 1
// Cảnh báo nếu có nhiều khoảng trắng liền nhau.

// 6.'no-multiple-empty-lines': 1
// Cảnh báo nếu có nhiều dòng trống liền nhau.

// 7.'space-before-blocks': ['error', 'always']
// Báo lỗi nếu không có khoảng trắng trước dấu { của block.

// 8.'object-curly-spacing': [1, 'always']
// Cảnh báo nếu không có khoảng trắng bên trong dấu { } của object.

// 9.'indent': ['warn', 2]
// Cảnh báo nếu không thụt lề 2 khoảng trắng.

// 10.'semi': [1, 'never']
// Cảnh báo nếu có dấu chấm phẩy cuối câu lệnh.

// 11.'quotes': ['error', 'single']
// Báo lỗi nếu không sử dụng dấu nháy đơn cho chuỗi.

// 12.'array-bracket-spacing': 1
// Cảnh báo nếu không có khoảng trắng bên trong dấu[] của mảng.

// 13.'linebreak-style': 0
// Vô hiệu hóa kiểm tra kiểu xuống dòng(CRLF hoặc LF).

// 14.'no-unexpected-multiline': 'warn'
// Cảnh báo nếu có dòng mã không mong muốn bị ngắt xuống dòng mới.

// 15.'keyword-spacing': 1
// Cảnh báo nếu không có khoảng trắng trước hoặc sau từ khóa(như if, else, for, v.v.).

// 16.'comma-dangle': 1
// Cảnh báo nếu có dấu phẩy thừa ở cuối danh sách phần tử trong mảng hoặc object.

// 17.'comma-spacing': 1
// Cảnh báo nếu không có khoảng trắng sau dấu phẩy.

// 18.'arrow-spacing': 1
// Cảnh báo nếu không có khoảng trắng xung quanh dấu => trong hàm mũi tên.

// Ý nghĩa của các mức độ cảnh báo và lỗi
//  0 hoặc 'off': Vô hiệu hóa quy tắc.
// 1 hoặc 'warn': Cảnh báo về quy tắc nhưng không ngăn chặn việc biên dịch.
// 2 hoặc 'error': Báo lỗi về quy tắc và ngăn chặn việc biên dịch.