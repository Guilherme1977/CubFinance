import { Flex, Skeleton, useModal } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import VaultStakeModal from '../VaultStakeModal'
import HasSharesActions from './HasSharesActions'

interface VaultStakeActionsProps {
  stakingTokenBalance: BigNumber
  accountHasSharesStaked: boolean
  performanceFee: number
}

const VaultStakeActions: React.FC<React.PropsWithChildren<VaultStakeActionsProps>> = ({
  stakingTokenBalance,
  accountHasSharesStaked,
  performanceFee,
}) => {
  // const { stakingToken, userDataLoaded } = pool
  // const [onPresentTokenRequired] = useModal(<NotEnoughTokensModal tokenSymbol={stakingToken.symbol} />)
  /* const [onPresentStake] = useModal(
    // <VaultStakeModal stakingMax={stakingTokenBalance} pool={pool} performanceFee={performanceFee} />,
  ) */
  /* const [openPresentLockedStakeModal] = useModal(
    <LockedStakeModal
      currentBalance={stakingTokenBalance}
      stakingToken={stakingToken}
      stakingTokenBalance={stakingTokenBalance}
    />,
  ) */

  const renderStakeAction = () => {
    /* return accountHasSharesStaked ? (
      <HasSharesActions pool={pool} stakingTokenBalance={stakingTokenBalance} performanceFee={performanceFee} />
    ) : (
      <VaultStakeButtonGroup
        onFlexibleClick={stakingTokenBalance.gt(0) ? onPresentStake : onPresentTokenRequired}
        onLockedClick={pool.vaultKey === VaultKey.CakeVault ? openPresentLockedStakeModal : null}
      />
    ) */
  }

  return null;
  // return (
  //  <Flex flexDirection="column">{userDataLoaded ? renderStakeAction() : <Skeleton width="100%" height="52px" />}</Flex>
  // )
}

export default VaultStakeActions
