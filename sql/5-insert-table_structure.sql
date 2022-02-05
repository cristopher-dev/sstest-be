INSERT INTO
  test.table_structure (
    header,
    dataType,
    format,
    fkTableTypeId,
    required
  )
VALUES
  ('T1C1', 'Int', '', 1, 1),
  ('T1C2', 'String', '', 1, 1),
  ('T1C3', 'Int', '', 1, 0),
  ('T1C4', 'Date', 'YYYY-MM-DD', 1, 0),
  ('T2C1', 'String', NULL, 2, 1),
  ('T2C2', 'String', NULL, 2, 0),
  ('T2C3', 'Int', NULL, 2, 0),
  ('T2C4', 'Date', 'YYYY-DD-MM HH:mm:ss', 2, 1),
  ('T2C5', 'Number', NULL, 2, 1),
  ('T3C1', 'Int', NULL, 3, 1);
INSERT INTO
  test.table_structure (
    header,
    dataType,
    format,
    fkTableTypeId,
    required
  )
VALUES
  ('T3C2', 'String', NULL, 3, 1),
  ('T3C3', 'Date', 'HH:mm:ss', 3, 1);