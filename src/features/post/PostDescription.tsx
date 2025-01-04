// ---- React ----
import { useState, useEffect } from 'react';
// ---- MUI ----
import { Box, Button, TextField } from '@mui/material';
// ---- API ----
import fetchPostDetail from '../../api/fetchPostDetail';
import updatePost, { UpdatePostRequest } from '../../api/updatePost';

export default function PostDescription() {
  // 変更前タイトル(保存用変数)
  const [saveTitle, setSaveTitle] = useState<string>('');
  // 変更前本文(保存用変数)
  const [saveBody, setSaveBody] = useState<string>('');
  // 編集状態フラグ => true: 編集状態, false: 未編集状態
  const [isEdit, setIsEdit] = useState<boolean>();
  // 投稿ID
  const [id, setId] = useState<number>(0);
  // タイトル
  const [title, setTitle] = useState<string>('');
  // 本文
  const [body, setBody] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // FIXME: 一覧画面から詳細画面に遷移する際にprops等で投稿IDを取得後、以下のsetIdに設定する想定
        setId(1);
        const response = await fetchPostDetail();
        // 画面項目に反映
        setTitle(response.title);
        setBody(response.body);
        // 保存用変数に格納
        setSaveTitle(response.title);
        setSaveBody(response.body);
      } catch {
        console.error('投稿が取得できませんでした');
      }
    };
    fetchData();
  }, []);

  /**
   * キャンセルボタン押下時処理
   */
  const onClickCancel = () => {
    // 画面項目の値を編集前の状態に戻す
    setTitle(saveTitle);
    setBody(saveBody);
    // 未編集状態にする
    setIsEdit(false);
  };

  /**
   * 更新ボタン押下時処理
   */
  const onClickUpdate = () => {
    const funcApi = async () => {
      try {
        // APIで使用する項目を設定
        const updatePostRequest: UpdatePostRequest = {
          id: id,
          title: title,
          body: body,
        };
        console.log(updatePostRequest);
        // 投稿更新API実行処理
        const response = await updatePost(updatePostRequest);
        // 更新後の値を画面項目に反映
        setTitle(response.data.title);
        setBody(response.data.body);
        // 更新後の値を保存用変数に格納
        setSaveTitle(response.data.title);
        setSaveBody(response.data.body);
        // 未編集状態にする
        setIsEdit(false);
      } catch {
        console.error('更新ボタン押下時処理に失敗しました。');
      }
    };
    funcApi();
  };

  /**
   * 編集ボタン押下時処理
   */
  const onClickEdit = () => {
    // 画面項目の現在値を保存用変数に格納
    setSaveTitle(title);
    setSaveBody(body);
    // 編集状態にする
    setIsEdit(true);
  };

  return (
    <>
      <h2>投稿の詳細画面</h2>
      <p>投稿の内容</p>
      {isEdit ? (
        // 編集状態の場合
        <Box>
          <Button onClick={() => onClickCancel()}>キャンセル</Button>
          <Button onClick={() => onClickUpdate()}>更新</Button>
        </Box>
      ) : (
        // 未編集状態の場合
        <Box>
          <Button onClick={() => onClickEdit()}>編集</Button>
          <Button>削除</Button>
        </Box>
      )}
      <TextField
        id="title"
        label="タイトル"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={!isEdit}
      />
      <TextField
        id="body"
        label="本文"
        value={body}
        multiline
        rows={15}
        onChange={(e) => setBody(e.target.value)}
        disabled={!isEdit}
      />
    </>
  );
}
