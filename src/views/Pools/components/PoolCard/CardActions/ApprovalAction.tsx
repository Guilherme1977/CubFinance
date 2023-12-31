import React, { useState, useCallback } from 'react'
import { Button, AutoRenewIcon, Skeleton } from '@pancakeswap-libs/uikit'
import { useSousApprove } from 'hooks/useApprove'
import useI18n from 'hooks/useI18n'
import { useERC20 } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import { getAddress } from 'utils/addressHelpers'
import { Pool } from 'state/types'

interface ApprovalActionProps {
  pool: Pool
  isLoading?: boolean
}

const ApprovalAction: React.FC<ApprovalActionProps> = ({ pool, isLoading = false }) => {
  const { sousId, stakingToken, earningToken, isFinished } = pool
  const TranslateString = useI18n()
  const stakingTokenContract = useERC20(stakingToken.address ? getAddress(stakingToken.address) : '')
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { onApprove } = useSousApprove(stakingTokenContract, sousId)
  const { toastSuccess, toastError } = useToast()

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      if (txHash) {
        toastSuccess(
          `${TranslateString(999, 'Contract Enabled')}`,
          `${TranslateString(999, `You can now stake in the ${earningToken.symbol} pool!`)}`,
        )
        setRequestedApproval(false)
      } else {
        // user rejected tx or didn't go thru
        toastError(
          `${TranslateString(999, 'Error')}`,
          `${TranslateString(
            999,
            `Please try again. Confirm the transaction and make sure you are paying enough gas!`,
          )}`,
        )
        setRequestedApproval(false)
      }
    } catch (e: any) {
      console.error(e)
      toastError('Error', e?.message)
    }
  }, [onApprove, setRequestedApproval, toastSuccess, toastError, TranslateString, earningToken])

  return (
    <>
      {isLoading ? (
        <Skeleton width="100%" height="52px" />
      ) : (
        <Button
          isLoading={requestedApproval}
          endIcon={requestedApproval ? <AutoRenewIcon spin color="currentColor" /> : null}
          disabled={isFinished || requestedApproval}
          onClick={handleApprove}
          width="100%"
        >
          {TranslateString(999, 'Enable')}
        </Button>
      )}
    </>
  )
}

export default ApprovalAction
